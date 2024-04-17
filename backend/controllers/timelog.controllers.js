const { TimeLog, LateLog, Break, Sequelize } = require('../models/index')
const moment = require('moment');
const Op = Sequelize.Op;

exports.clockIn = async (req, res) => {
    const { id } = req.user
    const { clockInTime, reason, isLate, clockinDate } = req.body

    try {
        const existingTimeLog = await TimeLog.findOne({ where: { userId: id, date: clockinDate } });

        if (existingTimeLog) {
            return res.status(400).json({ error: "User already clocked in for this date", existingTimeLog });
        }

        const timelog = await TimeLog.create({ clockIn: clockInTime, userId: id, date: clockinDate, });
        if (isLate) {
            const latelog = await LateLog.create({ timeLogId: timelog.timeLogId, lateTime: clockInTime, reason: reason })
        }

        res.status(201).json({ message: "Succesfully Clocked in", timelog });
    } catch (error) {
        console.error('Error clocking in:', error);
        res.status(500).json({ error: error.message });
    }
}

exports.breakStart = async (req, res) => {
    const { id } = req.user;
    const { timeLogId, BreakReason, BreakStartTime } = req.body;

    try {
        const newBreak = await Break.create({ timeLogId, startTime: BreakStartTime, description: BreakReason });

        const existingTimeLog = await TimeLog.findByPk(timeLogId, {
            include: Break
        });

        existingTimeLog.onBreak = true;
        await existingTimeLog.save();

        res.status(201).json({ message: "Break End Succesfully", existingTimeLog });
    } catch (error) {
        console.error('Error starting break:', error);
        res.status(500).json({ error: error.message });
    }
}


exports.breakEnd = async (req, res) => {
    const { id } = req.user;
    const { timeLogId, BreakId, BreakEndTime, } = req.body;

    try {
        const breakEntry = await Break.findByPk(BreakId);
        const breakDuration = new Date((new Date(`1970-01-01T${BreakEndTime}`) - new Date(`1970-01-01T${breakEntry.startTime}`))).toISOString().slice(11, 19);

        await breakEntry.update({ endTime: BreakEndTime, duration: breakDuration });

        const allBreaks = await Break.findAll({ where: { timeLogId } });
        const totalBreakDurationMilliseconds = allBreaks.reduce((total, breakEntry) => {
            const [hours, minutes, seconds] = breakEntry.duration.split(":").map(Number);
            return total + hours * 3600000 + minutes * 60000 + seconds * 1000;
        }, 0);

        const totalBreakDurationFormatted = new Date(totalBreakDurationMilliseconds).toISOString().slice(11, 19);

        const existingTimeLog = await TimeLog.findByPk(timeLogId, {
            include: Break
        });
        await existingTimeLog.update({ onBreak: false, breakDuration: totalBreakDurationFormatted });

        res.status(201).json({ message: "Break End Succesfully", existingTimeLog });
    } catch (error) {
        console.error('Error starting break:', error);
        res.status(500).json({ error: error.message });
    }
}


exports.clockOut = async (req, res) => {
    const { id } = req.user
    const { clockOutTime, timeLogId } = req.body
    try {
        const existingTimeLog = await TimeLog.findByPk(timeLogId, {
            include: Break
        });
        const totalHours = new Date((new Date(`1970-01-01T${clockOutTime}`) - new Date(`1970-01-01T${existingTimeLog.clockIn}`))).toISOString().slice(11, 19);

        await existingTimeLog.update({ totalHours, clockOut: clockOutTime })

        res.status(201).json({ message: "Clock Out Succesfully", existingTimeLog })
    } catch (error) {
        console.error('Error starting break:', error);
        res.status(500).json({ error: error.message });
    }

}

exports.getClockData = async (req, res) => {
    const { id } = req.user
    const { currentDate } = req.body
    console.log("exports.getClockData= ~ currentDate:", currentDate)

    try {
        const existingTimeLog = await TimeLog.findOne({
            where: {
                userId: id,
                date: currentDate
            },
            include : Break
        })
        if (!existingTimeLog) return res.status(400).json({ message: "Not Clocked In Yet" })

        res.status(200).json(existingTimeLog)
    } catch (error) {
        console.error('Error starting break:', error);
        res.status(500).json({ error: error.message });
    }
}

exports.getWeekAttendance = async (req, res) => {
    try {
        const { currentDate } = req.body;
        const weekDates = getCurrentWeekDates(currentDate);
        console.log("exports.getWeekAttendance= ~ weekDates:", weekDates)

        const weekAttendance = await TimeLog.findAll({
            where: {
                userId: req.user.id,
                date: {
                    [Op.between]: [
                        weekDates.start,
                        weekDates.end,
                    ],
                },
            },
        });

        res.status(200).json(weekAttendance);
    } catch (error) {
        console.error('Error fetching week attendance:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


function getCurrentWeekDates(date) {
    const today = new Date(date);
    const dayOfWeek = today.getDay();
    let startDate = new Date(today);
    let endDate = new Date(today);

    if (dayOfWeek === 0) {
        startDate.setDate(today.getDate() - 6);
    } else {
        startDate.setDate(today.getDate() - dayOfWeek + 1);
    }
    endDate.setDate(startDate.getDate() + 4);

    return {
        start: startDate,
        end: endDate,
    };
}




