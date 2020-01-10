const mongoose = require('mongoose')

//创建模型
const schema = new mongoose.Schema({
  name: { type: String },
  key: { type: String },
  create_data: { type: Date, default: Date.now }
})

//导出模型
module.exports = mongoose.model('Category', schema, 'categories')
