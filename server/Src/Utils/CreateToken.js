const jwt = require('jsonwebtoken');

module.exports.CreateToken = async (data) => {
    try {
        const token = await jwt.sign(data, process.env.SECRET, { expiresIn: '7d' });
        return token;
    } catch (error) {
        throw new error("Error creating token: " + error.message);
    }
}
