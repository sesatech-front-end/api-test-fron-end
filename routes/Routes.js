const router = require('express').Router()
const UserController = require('../controllers/UserController')
const DashController = require('../controllers/DashController')
const verifyToken = require('../helpers/VerifyToken')

router.post('/login', UserController.login)
router.get('/dashboard/:page', verifyToken,  DashController.dashboard)

module.exports = router
