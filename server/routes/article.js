module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const multer = require('multer')
  const Article = require('../models/Article')

  const upload = multer({ dest: './uploads' })

  router.get('/article', async (req, res) => {
    const model = await Article.find().populate('categories')
    res.send(model)
  })

  router.get('/article/:id', async (req, res) => {
    const model = await Article.findById(req.params.id)
    res.send(model)
  })

  router.post('/article', async (req, res) => {
    const model = await Article.create(req.body)
    res.send(model)
  })

  router.put('/article/:id', async (req, res) => {
    const model = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/article/:id', async (req, res) => {
    const model = await Article.findByIdAndDelete(req.params.id)
    res.send(model)
  })

  //上传图片
  app.post(
    '/api/admin/rest/upload',
    upload.single('file'),
    async (req, res) => {
      const file = req.file
      file.url = `http://127.0.0.1:3001/uploads/${file.filename}`
      await res.send(file)
    }
  )

  app.use('/api/admin/rest/', router)
}
