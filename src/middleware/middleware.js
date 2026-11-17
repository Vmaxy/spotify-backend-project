const jwt  = require('jsonwebtoken')

async function authMiddleware(req,res,next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({message : "unauthorized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_AUTH)
        if (decoded.role !== 'user') {
            return res.status(403).json({message : "forbidden"})
        }
        req.user = decoded
        next()
    } catch (err) {
        console.error(err)
        res.status(401).json({message : "invalid token"})
    }
}

module.exports = { authMiddleware }