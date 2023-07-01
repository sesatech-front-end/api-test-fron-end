const jwt = require('jsonwebtoken')

const createUserToken = async (idUser, nameUser) => {
    const token = jwt.sign({
        name: nameUser,
        id: idUser
    }, "secretKey013546")
    return token
}

module.exports = createUserToken