const router = require('express').Router()
const UserController = require('../controllers/UserController')
const DashController = require('../controllers/DashController')

router.post('/login', UserController.login)
router.get('/dashboard/:page', DashController.dashboard)

module.exports = router
