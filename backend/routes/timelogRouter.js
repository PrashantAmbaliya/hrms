const { Router } = require('express')
const { clockIn, breakStart, breakEnd , clockOut, getWeekAttendance, getClockData} = require('../controllers/timelog.controllers')
const { verifyToken } = require('../middlewares/authMiddleware')

const router = Router()

// timelog/clockin
router.post('/clockin', verifyToken, clockIn)
router.post('/breakStart', verifyToken, breakStart)
router.post('/breakEnd', verifyToken, breakEnd)
router.post('/clockOut', verifyToken, clockOut)
router.post('/getClockData', verifyToken, getClockData)
router.post('/getWeekAttendance', verifyToken, getWeekAttendance)

module.exports = router