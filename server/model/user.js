import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	timezone: { type: String, required: true, unique: true },
	timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
