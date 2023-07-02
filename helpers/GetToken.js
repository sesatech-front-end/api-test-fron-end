const getToken = (req) => {
  if (req.headers.authorization != undefined) {
    const authHeaders = req.headers.authorization
    const token = authHeaders.split(' ')[1]
    return token
  } else {
    return false
  }
}

module.exports = getToken
