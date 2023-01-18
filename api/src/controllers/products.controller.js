const Product = require('../models/Products')



const getProducts = async(req, res) => {
    
    /* try{
        const products = await Product.find({erased: false});
        if(products){
            
            res.status(200).json({ message: "Products found", products });
        }
    }catch(err){
        res.status(404).json({message: "Products not found", err});
    } */

    const title = req.query.title;
    try{
        const products = await Product.find({erased: false});
        if(products){
            if(title){
                const productsTitle = products.filter(product => product.title.toLowerCase().includes(title.toLowerCase()));
                if(productsTitle.length){
                    return res.status(200).json({ message: "Products found", productsTitle });
                }else{
                    return res.status(404).json({ message: "Products not found" });
                }
            }else{
                res.status(200).json({ message: "Products found", products });
            }
            
        }

    }catch(err){
        res.status(404).json({message: "Products not found", err});
    }
    
    
};

const getProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findOne({_id: id});
        res.status(200).json({ message: "Product found", product });
    }catch(err){
        res.status(404).json({message: "Product not found", err});
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

const updateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const product = await Product.findOne({_id: id},)
        if(!product){
            return res.status(400).json({msg: 'Product not found'});
        }else{
            const actPro = await Product.updateOne({_id: id},data);
            res.status(200).json({msg: "Product updated", actPro});
        }

    }catch(err){
        res.status(404).json({msg: "Product not found", err});
    }
};



const deleteProduct = async(req, res) => {
   try{
        const {id} = req.params;
        const product = await Product.findOne({_id: id});
        product.erased = true;
        await product.save();
        res.status(200).json({msg: "Product deleted", product});
   }catch(err){
         res.status(404).json({msg: "Product not found", err});
   }
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct
}