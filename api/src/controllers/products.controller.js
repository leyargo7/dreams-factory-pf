const Product = require('../models/Products')



const getProducts = async(req, res) => {
    const products = await Product.find();
    res.json(products);
};


const createProduct = async(req, res) => {
    const {title, img, rating, price, brand, model, sidePanel, color, cabinetType, description, inStock, category, quantity, style, backlit, wireless, rpm, airFlow, noiseLevel, efficiency, size, type, trackingMethod, storageInterface, memory, clockSpeed, chipset, formFactor, memorySlots, socketType, speed, cacheMemory } = req.body;
    const newProduct = new Product({title, img, rating, price, brand, model, sidePanel, color, cabinetType, description, inStock, category, quantity, style, backlit, wireless, rpm, airFlow, noiseLevel, efficiency, size, type, trackingMethod, storageInterface, memory, clockSpeed, chipset, formFactor, memorySlots, socketType, speed, cacheMemory});
    await newProduct.save();
    res.json(newProduct);
};

const updateProduct = (req, res) => {
    res.json({msg: 'update Product'});
};

const getProduct = (req, res) => {
    res.json({msg: 'get Product'});
};

const deleteProduct = (req, res) => {
    res.json({msg: 'delete Product'});
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct
}