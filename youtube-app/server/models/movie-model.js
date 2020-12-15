const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: false },
        keywords: { type: [String], required: false },
        channel: { type: String, required: false },
        channelid: { type: String, required: false },
        likes: { type: Number, required: false },
        dislikes: { type: Number, required: false},
        views: { type: Number, required: false },
        comments: { type: [String], required: false },
        sharelink: { type: String, required: false },
        videolink: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
