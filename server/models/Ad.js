const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  link: { type: String },
  create_data: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Ad', schema)