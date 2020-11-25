const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Channel = new Schema(
    {
        channelid: { type: String, required: true },
        description: { type: String, required: true },
        videos: { type: [Number], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('channels', Channel)
