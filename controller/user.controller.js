const userModel = require("../models/user.model.js")

const createUser = async (req, res) => {
    const { id, name, phone, email, department } = req.body

    try {
        let user = await userModel.create({
            id, name, phone, email, department
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { createUser }
