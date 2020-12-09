const Channel = require('../models/channel-model')

createChannel = (req, res) => {
	const body = req.body

	if(!body) {
		return res.status(400).json({
			success:false,
			error: 'You must provide a name for the channel',
		})
	}
	const channel = new Channel(body)
	if (!channel) {
		return res.status(400).json({success: false, error: err})
	}
	channel
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				channelID: channel._id,
				message: 'Channel created!',
			})
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: 'Channel not created!',
			})
		})
}
deleteChannel = async(req, res) => {
	await Channel.findOneAndDelete({ _id: req.params.id }, (err, channel) => {
        	if (err) {
            		return res.status(400).json({ success: false, error: err })
        	}	

        	if (!channel) {
            		return res
                	.status(404)
                	.json({ success: false, error: `Channel not found` })
        	}

        	return res.status(200).json({ success: true, data: channel })
    	}).catch(err => console.log(err))
}

updateChannel = async(req, res) => {
	const body = req.body

        if(!body) {
                return res.status(400).json({
                        success:false,
                        error: 'You must provide a channel',
                })
        }
        const channel = new Channel(body)
        if (!channel) {
                return res.status(400).json({success: false, error: err})
        }
        channel
                .save()
                .then(() => {
                        return res.status(201).json({
                                success: true,
                                channelID: channel._id,
                                message: 'Channel created!',
                        })
                })
                .catch(error => {
                        return res.status(400).json({
                                error,
                                message: 'Channel not created!',
                        })
                })
}

getChannelbyID = async(req, res) => {
	await Channel.findOne({ _id: req.params.id }, (err, channel) => {
        	if (err) {
            		return res.status(400).json({ success: false, error: err })
        	}

        	if (!channel) {
            		return res
                	.status(404)
                	.json({ success: false, error: `Channel not found` })
        	}
        	return res.status(200).json({ success: true, data: channel })
    	}).catch(err => console.log(err))
}

getChannels = async(req, res) => {
	await Channel.find({}, (err, channels) => {
        	if (err) {
            		return res.status(400).json({ success: false, error: err })
        	}
        	if (!channels.length) {
            		return res
                	.status(404)
                	.json({ success: false, error: `Channel not found` })
        	}
        	return res.status(200).json({ success: true, data: channels })
    	}).catch(err => console.log(err))

}

getSubscriptions = async(req, res) => {
	await Channel.find({}, (err, channels) => {
                if (err) {
                        return res.status(400).json({ success: false, error: err })
                }
                if (!channels.length) {
                        return res
                        .status(404)
                        .json({ success: false, error: `Subscriptions not found` })
                }
                return res.status(200).json({ success: true, data: channels })
        }).catch(err => console.log(err))
}

getDescription = async(req, res) => {
	await Channel.find({}, (err, channels) => {
                if (err) {
                        return res.status(400).json({ success: false, error: err })
                }
                if (!channels.length) {
                        return res
                        .status(404)
                        .json({ success: false, error: `Channel descriptionnot found` })
                }
                return res.status(200).json({ success: true, data: channels })
        }).catch(err => console.log(err))
}

module.exports = {
	createChannel,
	deleteChannel,
	updateChannel,
	getChannelbyID, 
	getChannels,
	getSubscriptions,
	getDescription,
}
