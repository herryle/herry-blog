module.exports = app => {
  const express = require('express')
  const User = require('../models/User')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const router = express.Router()

  app.set('secret', 'jhashdjsakdkn')

  router.get('/user', async (req, res) => {
    const model = await User.find()
    res.send(model)
  })

  router.get('/user/:id', async (req, res) => {
    const model = await User.findById(req.params.id)
    res.send(model)
  })

  router.post('/user', async (req, res) => {
    const model = await User.create(req.body)
    res.send(model)
  })

  router.put('/user/:id', async (req, res) => {
    const model = await User.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  router.delete('/user/:id', async (req, res) => {
    const model = await User.findByIdAndDelete(req.params.id)
    res.send(model)
  })

  //用户登陆
  app.post('/api/admin/rest/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    const isVaild = require('bcryptjs').compareSync(password, user.password)
    assert(isVaild, 422, '密码错误')
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  app.use('/api/admin/rest/', router)

  //express错误处理中间件函数 错误处理函数
  app.use(async (err, req, res, next) => {
    // 如果没有statusCode 则500
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
