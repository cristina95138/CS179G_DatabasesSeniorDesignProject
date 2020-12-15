const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userid: { type: String, required: true },
        pw: { type: String, required: true },
        preferences: { type: [String], required: false},
        recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movies', required: false}],
        videos: { type: [Number], required: false },
        description: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
