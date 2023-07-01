const CreateUserToken = require('../helpers/CreateUserToken')

class UserController {
  static async login(req, res) {
    const name = req.body.name
    const password = req.body.password
    if( name == 'teste' && password == '123456') {
        const id = 1
        const token = await CreateUserToken( id , name)
        res.status(200).json({message: 'Login bem-sucedido', accessToken: token})
    } else {
        res.status(401).json({message: 'Login Inválido'})
    }
  }
}

module.exports = UserController
