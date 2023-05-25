import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react"

const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CALETA	
		})
	],
	async session({ session }) {

	},
	async signIn({ profile }) {

	}
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST} 