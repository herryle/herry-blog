module.exports = app => {
  const express = require('express')
  const Ad = require('../models/Ad')
  const router = express.Router()

  router.get('/ad', async (req, res) => {
    const model = await Ad.find()
    res.send(model)
  })

  router.get('/ad/:id', async (req, res) => {
    const model = await Ad.findById(req.params.id)
    res.send(model)
  })

  router.post('/ad', async (req, res) => {
    const model = await Ad.create(req.body)
    res.send(model)
  })

  router.put('/ad/:id', async (req, res) => {
    const model = await Ad.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/ad/:id', async (req, res) => {
    const model = await Ad.findByIdAndDelete(req.params.id)
    res.send(model)
  })

  app.use('/api/admin/rest/', router)
}
