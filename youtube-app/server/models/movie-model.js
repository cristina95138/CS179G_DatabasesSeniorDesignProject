const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
        keywords: { type: [String], required: true },
        channel: { type: String, required: true },
        channelid: { type: String, required: true },
        likes: { type: Number, required: true },
        dislikes: { type: Number, required: true},
        views: { type: Number, required: true },
        comments: { type: Number, required: true },
        share: { type: String, required: true },
        shares: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
