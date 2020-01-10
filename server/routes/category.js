module.exports = app => {
  const express = require('express')
  const Category = require('../models/Category')
  const Article = require('../models/Article')
  const router = express.Router()

  router.get('/category', async (req, res) => {
    const model = await Category.find()
      .populate('parent')
      .lean()
    res.send(model)
  })

  router.get('/category/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  router.get('/categories/:id', async (req, res) => {
    const model = await Article.find()
      .where({
        categories: { $in: [req.params.id] }
      })
      .populate('categories')
    res.send(model)
  })

  router.post('/category', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })

  router.put('/category/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/category/:id', async (req, res) => {
    const model = await Category.findByIdAndDelete(req.params.id)
    res.send(model)
  })

  app.use('/api/admin/rest/', router)
}
