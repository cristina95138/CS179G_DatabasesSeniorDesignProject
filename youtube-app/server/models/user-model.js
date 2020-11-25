const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userid: { type: String, required: true },
        pw: { type: [String], required: true },
	channel { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
