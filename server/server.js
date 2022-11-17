const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 5500

app.use(express.json())
app.use(cors())

const { getPrimary, getSecondary, getAttachment1, getAttachment2, getAttachment3, getAttachment4, getAttachment5, getAttachment6, getAttachment7, getAttachment8, getAttachment9, getAttachment10, saveLoadout, getPerk1, getPerk2, getTactical, getLethal } = require('./controller.js')

//app.get('/homepage', homepage)
app.get('/getPrimary', getPrimary)
app.get('/getSecondary', getSecondary)
app.get('/getAttachment1', getAttachment1)
app.get('/getAttachment2', getAttachment2)
app.get('/getAttachment3', getAttachment3)
app.get('/getAttachment4', getAttachment4)
app.get('/getAttachment5', getAttachment5)
app.get('/getAttachment6', getAttachment6)
app.get('/getAttachment7', getAttachment7)
app.get('/getAttachment8', getAttachment8)
app.get('/getAttachment9', getAttachment9)
app.get('/getAttachment10', getAttachment10)
app.get('/getPerk1', getPerk1)
app.get('/getPerk2', getPerk2)
app.get('/getTactical', getTactical)
app.get('/getLethal', getLethal)
app.post('/saveLoadout', saveLoadout)




app.listen(PORT, () => console.log(`running on ${PORT}`))



























// {
//     "id": 1,
//     "name": "X16"
// },
// {
//     "id": 2,
//     "name": "1911"
// },
// {
//     "id": 3,
//     "name": ".357"
// },
// {
//     "id": 4,
//     "name": "M19"
// },
// {
//     "id": 5,
//     "name": ".50 GS"
// },
// {
//     "id": 6,
//     "name": "Renetti"
// },
// {
//     "id": 7,
//     "name": "Sykov"
// },
// {
//     "id": 8,
//     "name": "Pila"
// },
// {
//     "id": 9,
//     "name": "Strela-P"
// },
// {
//     "id": 10,
//     "name": "Jokr"
// },
// {
//     "id": 11,
//     "name": "RPG-7"
// },
// {
//     "id": 12,
//     "name": "MGL-32 Grenade Launcher"
// },
// {
//     "id": 13,
//     "name": "Combat Knife"
// },
// {
//     "id": 14,
//     "name": "Kali Sticks"
// },
// {
//     "id": 15,
//     "name": "Dual Kodachis"
// },
// {
//     "id": 16,
//     "name": "Riot Shield"
// }