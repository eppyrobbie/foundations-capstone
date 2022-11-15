const primary = require('./primarydb.json')
const secondary = require('./secondarydb.json')
const attachment = require('./attachmentdb.json')
const savedLoadout = require('./savedLoadout.json')
const perk = require('./perkdb.json')

module.exports = {
    getPrimary: (req, res) => {
        console.log(primary)
        res.status(200).send(primary)
    },

    getSecondary: (req, res) => {
        console.log(secondary)
        res.status(200).send(secondary)
    },

    getAttachment1: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment2: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment3: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment4: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment5: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    saveLoadout: (req, res) => {
        // console.log(req.body)
        savedLoadout.push(req.body)
        console.log(savedLoadout)
    },
    
    getPerk: (req, res) => {
        //console.log(perk)
        console.log(req.body)
        res.status(200).send(perk)
    }

}