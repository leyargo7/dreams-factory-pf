const Product = require('../models/Products')



const getProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json({ message: "Products found", products });
    }catch(err){
        res.status(400).json({message: "Products not found", err});
    }
    
    
};

const getProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findOne({_id: id});
        res.status(200).json({ message: "Product found", product });
    }catch(err){
        res.status(400).json({message: "Product not found", err});
    }
};


const createProduct = async(req, res) => {
    
    try{
        const data = req.body;
        if(!data.title){
            return res.status(400).json({msg: 'Title is required'});
        }
        if(!data.category){
            return res.status(400).json({msg: 'Category is required'});
        }
        else{
            const product = new Product(req.body);
            await product.save();
            res.json(product);
        }
    }catch(err){
        res.status(400).json({msg: err.message});
    }

    res.json({msg: 'create Product'});
};

const updateProduct = (req, res) => {
    res.json({msg: 'update Product'});
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