import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

import { connectDB } from "../../../../utils/database"
import User from "@/models/user"

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CALETA	
		})
	],
	database: process.env.MONGODB_URL,
	async session({ session }) {
		const sesionUser = await User.findOne({
			email: session.user.email
		})

		session.user.id = sesionUser._id.toString()
		
		return session
	},
	async signIn({ profile }) {
		try {
			await connectDB()

			const userExists = await User.findOne({ email: profile.email })

			if (!userExists) {
				await User.create({
					email: profile.email,
					username: profile.username.replace(" ", "").toLowerCase(),
					image: profile.image,
				})
			}
			return true
		}
		 catch (error) {
			console.error(error)
			return false
		}

	}
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST} 