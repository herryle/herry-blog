module.exports = options => {
  return async (req, res, next) => {
    const User = require('../models/User')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const token = String(req.headers.authorization || '')
      .split(' ')
      .pop()

    assert(token, 401, '请提供有效的token')
    console.log(req.app.get('secret'))
    const userid = jwt.verify(token, req.app.get('secret')).id
    assert(userid, 401, '用户不存在')
    const user = await User.findById(userid)
    assert(user, 401, '用户不存在')
    next()
  }
}
