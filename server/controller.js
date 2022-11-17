const primary = require('./primarydb.json')
const secondary = require('./secondarydb.json')
const attachment = require('./attachmentdb.json')
const savedLoadout = require('./savedLoadout.json')
const perk = require('./perkdb.json')
const tactical = require('./tacticaldb.json')
const lethal = require('./lethaldb.json')

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

    getAttachment6: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment7: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment8: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment9: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    getAttachment10: (req, res) => {
        console.log(attachment)
        res.status(200).send(attachment)
    },

    saveLoadout: (req, res) => {
        console.log('hit saveloadout')
        res.status(200).send('success')
        savedLoadout.push(req.body)
       // console.log(savedLoadout)
    },
    
    getPerk1: (req, res) => {
        //console.log(perk)
        console.log(req.body)
        res.status(200).send(perk)
    },

    getPerk2: (req, res) => {
        //console.log(perk)
        console.log(req.body)
        res.status(200).send(perk)
    },
    getTactical: (req, res) => {
        console.log(tactical)
        res.status(200).send(tactical)
    },
    getLethal: (req, res) => {
        console.log(lethal)
        res.status(200).send(lethal)
    }

}