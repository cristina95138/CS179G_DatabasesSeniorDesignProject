const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        userid: { type: String, required: true },
        pw: { type: String, required: true },
        preferences: { type: [String], required: true},
        recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movies', required: true}],
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
