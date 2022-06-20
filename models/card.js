const {Schema, model} = require('mongoose')

const Card = new Schema({
    kind: {},
    age: {},
    name: {},
    picture: {},
    date: {}
})

module.exports = model('Card', Card)