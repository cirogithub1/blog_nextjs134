import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

import connectToDB from "@/utils/database"
import User from "@/models/User"

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CALETA	
		})
	],
	// database: process.env.MONGO_URL_DB,
	callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    }
	},
	async session({ session }) {
		const sesionUser = await User.findOne({
			email: session.user.email
		})

		session.user.id = sesionUser._id.toString()
		
		return session
	},
	async signIn({ profile }) {
		try {
			await connectToDB()

			const userExists = await User.findOne({ email: profile.email })

			if (!userExists) {
				await User.create({
					email: profile.email,
					username: profile.username.replace(" ", "").toLowerCase(),
					image: profile.picture
				})
			}
			return true
		}
		 catch (error) {
			console.error("/[...nextauth]/route/ error =",error)
			return false
		}
	},
	secret: process.env.NEXTAUTH_CALETA
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST} 