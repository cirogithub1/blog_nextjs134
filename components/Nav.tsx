"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

function Nav() {
	const { data: session } = useSession()

	const [providers, setProviders] = useState(null)
	const [toggleMenu, setToggleMenu] = useState(false)

	useEffect(() => {
		async function callProviders() {
			const res:any = await getProviders()
			setProviders(res)
		}
		callProviders()
	}, [])
	
	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href={'/'} className="flex gap-2 flex-center">
				<Image 
						src="/assets/images/logo.svg"
						alt="logo"
						width={30}
						height={30}
					className="object-contain"/>

				<p className="logo_text">AI Search</p>
			</Link>

			{/* Mobile Navigation */}
			<div className="sm:flex hidden">
				{session 
				? 
					<div className="flex gap-3 md:gap-5">
						<Link 
							href={'/create-prompt'}
							className="black_btn">
								Create Post
						</Link>

						<button 
							className="outline_btn"
							type="button"
							onClick={() => signOut()}>
							Sign Out
						</button>

						<Link href={'/profile'}>
							<Image 
								src="/assets/images/logo.svg"
								alt="profile"
								width={38}
								height={38}
								className="rounded-full"/>
						</Link>
					</div>	
				: 
					<button 
						className="black_btn"
						type="button"
						onClick={() => signIn()}>
								Sign In with Google
					</button>
				}
			</div>

			{/* Mobile Navigation  */}
			<div className="sm:hidden flex relative">
				{session
					?	
						<div className="flex">
							<Image 
								src="/assets/icons/menu.svg"
								alt="profile"
								width={30}
								height={30}
								className="rounded-full"
								onClick={() => setToggleMenu((prev:any) => !prev)}/>

								{toggleMenu && 
									<div className="dropdown">
										<Link 
											href={'/profile'}
											className="dropdown_link"
											onClick={() => setToggleMenu(false)}>
												Profile
										</Link>

										<Link 
											href={'/create-prompt'}
											className="dropdown_link"
											onClick={() => setToggleMenu(false)}>
												Create Prompt
										</Link>

										<button 
											className="black_btn mt-5 w-full"
											type="button"
											onClick={() => {
												setToggleMenu(false)
												signOut()
											}}
										>
											Sign Out	
										</button>
									</div>
								}	
						</div>
					:
						<button 
							className="black_btn"
							type="button"
							onClick={() => signIn()}>
									Sign In with Google
						</button>

					}
			</div>
		</nav>
	)
}

export default Nav