const User = require('../model/User');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    // if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ "username": req.body.username }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ${req.body.username} not found` });
    }
    const result = await user.deleteOne({ "username": req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    // if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ "username": req.body.username }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ${req.body.username} not found` });
    }
    res.json(user);
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser
}