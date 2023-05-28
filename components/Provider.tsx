"use client"

// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

// function Provider({ 
//   Component, 
//   pageProps: { 
//     session, 
//     ...pageProps }}: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>)}

interface Props {
	children: React.ReactNode,
	session: any,
}

function Provider({ children, session }: Props) {
	return (
		<SessionProvider session={session}>
			{children} 
		</SessionProvider>
	)
}

export default Provider