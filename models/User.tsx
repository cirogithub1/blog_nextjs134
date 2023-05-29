import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
	email: {
		type: String,
		unique: [true, 'Email already exists'],
		required: [true, 'Email is required']
	},
	username: {
		type: String,
		required: [true, 'Username is required'],
		match: [/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers']
	},
	image: {
		type: String
	}
})

const User = model('User', UserSchema) || models.User

export default User