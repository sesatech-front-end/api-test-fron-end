const jwt = require('jsonwebtoken')
const getToken = require('./GetToken')

const verifyToken = (req, res, next) => {
  const token = getToken(req)
  if (token != false) {
    try {
      const tokenVerified = jwt.verify(token, 'secretKey013546')
      if (tokenVerified.name == 'teste' && tokenVerified.id == 1) {
        next()
      }
    } catch {
      res.status(401).json({ message: 'Acesso não autorizado.' })
    }
  } else {
    res.status(401).json({ message: 'Acesso não autorizado.' })
  }
}

module.exports = verifyToken
