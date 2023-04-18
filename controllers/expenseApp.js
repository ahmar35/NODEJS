const ExpenseDetails = require('../models/ExpenseApp')

exports.postUser = async (req, res, next) => {

    console.log(req.body)
    const expense = req.body.expense
    const description = req.body.description
    const category = req.body.category
    const info = await ExpenseDetails.create({ Amount: expense, Description: description, Category: category })
    res.status(201).json(info)
}
exports.getUser = async (req, res, next) => {
    const users = await ExpenseDetails.findAll()
    res.status(200).json(users)
}
exports.deleteUser = async (req, res, next) => {
    const ID = req.params.id
    await ExpenseDetails.destroy({ where: { id: ID } })
    res.sendStatus(200)
}

exports.updateUser = async (req, res, next) => {
    const expense = req.body.Amount
    const description = req.body.Description
    const category = req.body.Category
    const ID = req.params.id
    const update = await ExpenseDetails.update({ Amount: expense, Description: description, Category: category }, { where: { id: ID } })
    res.status(200).json(update)
}