const { Router } = require('express')
const { createUser, loginUser, getUsersClockedInToday } = require('../controllers/user.controllers')

const router = Router()

// /user/create
router.post('/create', createUser)

// /user/login
router.post('/login', loginUser)

// /user/clocked-in-today
router.get('/clocked-in-today', getUsersClockedInToday)

module.exports = router