
const storeModels = require('../models/StoreModel')

exports.addProduct = async (req, res, next) => {
    try {
        const Name = req.body.Name
        const description = req.body.description
        const price = req.body.price
        const quantity = req.body.quantity
        const info = await storeModels.create({ Name, description, price, quantity })
        res.status(201).json(info)
    } catch (err) {
        console.log(err)
    }

}

exports.getProduct = async (req, res, next) => {
    try {
        const info = await storeModels.findAll()
        res.status(200).json(info)
    } catch (err) {
        console.log(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const Id = req.params.id
        const info = await storeModels.destroy({ where: { id: Id } })
        res.status(200).json(info)
    } catch (err) {
        console.log(err)
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        productDetails = {
            Name: req.body.Name,
            quantity: req.body.quantity,

            price: req.body.price,
            description: req.body.description
        }
        const Id = req.params.id
        console.log(productDetails)
        console.log(Id)
        const info = await storeModels.update(productDetails, { where: { id: Id } })
        res.status(200).json(info)
    } catch (err) {
        console.log(err)
    }
}

exports.buyProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const buyingQuantity = req.body.buyingQuantity
        const product = await storeModels.findOne({ where: { id: productId } });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        if (buyingQuantity === 1) {

            var newQuantity = product.quantity - 1;
        }
        if (buyingQuantity === 2) {

            var newQuantity = product.quantity - 2;
        }
        if (buyingQuantity === 3) {

            var newQuantity = product.quantity - 3;
        }
        if (newQuantity < 0) {
            return res.status(400).json({ message: 'Product out of stock' });
        }
        const updatedProduct = await storeModels.update({ quantity: newQuantity }, { where: { id: productId } });
        res.status(200).json({ message: 'Product purchased successfully', newQuantity });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}