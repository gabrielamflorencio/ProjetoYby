var express = require('express');
var router = express.Router();
const Humidity = require('../models/humidity')
const Sensor = require('../models/sensor')
const User = require('../models/user')
const sgMail = require('@sendgrid/mail')

router.post('/', async (req, res) => {
    const {humidityValue, name} = req.body
    
    try {
        let sensor = await Sensor.findOne({name: name})
        let user = await User.findOne({_id: sensor.user})
        let humidity = new Humidity({humidityValue: humidityValue, sensor: sensor._id})
        sensor.humidityData.push(humidity._id)
        await humidity.save()
        await sensor.save()
        
        if(humidityValue >= 50){
        
        }
        res.status(200).json(humidity)
    } catch (error) {
        res.status(500).json({error: 'Problemas ao cadastrar dado de umidade do sensor'})
    }
})

module.exports = router
