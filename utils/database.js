// import mongoose from 'mongoose'

async function connectToDB () {
// 	try {
// 		const { connection } = await mongoose.connect( 
// 			process.env.NEXT_PUBLIC_MONGODB_URI
// 		)

// 		// 0 : disconnected, 1 : connected, 2 : connecting, 3 : disconecting 
// 		if (connection.readyState === 1) {
// 			console.log('utils/datanase.js/ connection.readyState =', connection.readyState)
// 			return Promise.resolve(true)
// 		}
// 	} catch (error) {
// 		Router.push('/login')
// 		return Promise.reject(error)
// 	}
}

export default connectToDB

// export function connectDB() {
// 	if (mongoose.connection.readyState === 1) {
// 		return mongoose.connection.asPromise()
// 	} else {
// 		try {
// 			const uri = process.env.MONGO_URL_DB
// 			return mongoose.connect(uri)
// 		} catch (error) {
// 			console.error("/utils/database.js error = ", error)
// 		}
// 	}
// }


// let isConnected = false

// export async function connectDB() {
// 	mongoose.set('strictQuery', true)
// 	if (isConnected) {
// 		console.log('Already connected')
// 		return
// 	}

// 	try {
// 		await mongoose.connect(process.env.MONGO_URL_DB)
// 		isConnected = true
// 		console.log('MongoDB connected')
// 	} catch (error) {
// 		console.error("/utils/database.js error = ", error)
// 	}
// }