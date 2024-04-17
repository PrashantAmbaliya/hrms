const { User } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10;
const Secret = "secret"

exports.createUser = async (req, res) => {
  const { name, email, password, employeeRole } = req.body
  try {
    const ExistingUser = await User.findOne({ where: { email: email } })
    if (ExistingUser && ExistingUser.length > 0) return res.status(200).json({ message: "Email already Exist" })

    const HashPassword = await bcrypt.hash(password, saltRounds)

    await User.create({ name, email, password: HashPassword, employeeRole });

    res.status(200).json({ message: "User Created Succesfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const ExistingUser = await User.findOne({ where: { email: email } })

    if (!ExistingUser) return res.status(401).json({ message: "Invalid Credentials" })

    if (await bcrypt.compare(password, ExistingUser.password) !== true) {
      return res.status(401).json({ message: "Invalid Credentials" })
    }

    const userData = {
      name: ExistingUser.name,
      email: ExistingUser.email,
      role: ExistingUser.employeeRole,
      isAdmin: false
    }

    const tokenData = {
      id: ExistingUser.id,
      email: ExistingUser.email,
      name: ExistingUser.name,
      employeeRole: ExistingUser.employeeRole,
      isAdmin: ExistingUser.isAdmin,
    }

    const token = await jwt.sign(tokenData, Secret)

    res.status(200).json({ message: "Login Succesfully", token, userData })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getUsersClockedInToday = async (req, res) => {
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const endDate = new Date(currentDate);
    endDate.setHours(23, 59, 59, 999);

    const timeLogs = await models.TimeLog.findAll({
      where: {
        date: {
          [Op.between]: [currentDate, endDate]
        }
      },
      include: [
        { model: models.User }
      ]
    });

    //   const users = timeLogs.map(timeLog => ({
    //     userId: timeLog.User.id,
    //     name: timeLog.User.name,
    //     email: timeLog.User.email,
    //     clockIn: timeLog.clockIn
    //   }));

    res.json(timeLogs);
  } catch (error) {
    console.error("Error retrieving users clocked in today:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

