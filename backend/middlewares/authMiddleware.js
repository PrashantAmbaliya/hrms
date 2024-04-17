const jwt = require('jsonwebtoken');
const Secret = "Secret"

function verifyToken(req, res, next) {
    // const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    // if (!token) {
    //     return res.status(401).json({ error: 'Authorization token is missing' });
    // }

    // jwt.verify(token, Secret, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).json({ error: 'Invalid token' });
    //     }

    //     req.user = decoded;
    //     next();
    // });

    req.user = {
        "id": 3,
        "email": "liam@example.com",
        "role": "Software Engineer",
        "name": "Liam Wilson",
        "iat": 1710850443
    };
    next();
}

function isAdmin(req, res, next) {
    if (req.user && req.user.isAdmin === true) {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized access, Only Admins Can Perform this Action', data: req.user });
    }
}

module.exports = { verifyToken, isAdmin };
