const express = require('express')

const ChannelCtrl = require('../controllers/channel-ctrl')

const router = express.Router()

router.post('/channel', ChannelCtrl.createChannel)
router.delete('/channel/:id', ChannelCtrl.deleteChannel)
router.put('/channel/:id', ChannelCtrl.updateChannel)
router.get('/channel/:id', ChannelCtrl.getChannelbyID)
router.get('/channel/', ChannelCtrl.getChannels)
router.get('/channel/:id', ChannelCtrl.getSubscriptions)
router.get('/channel', ChannelCtrl.getDescription)

module.exports = router 
