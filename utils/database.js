import monngoose from 'mongoose'

let isConnected = false

export async function connectDB() {
	monngoose.set('strictQuery', true)
	if (isConnected) {
		console.log('Already connected')
		return
	}

	try {
		await monngoose.connect(process.env.MONGO_URL, {
			dbName: "prompt AI",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		isConnected = true
		console.log('MongoDB connected')
	} catch (error) {
		console.error(error)
	}
}