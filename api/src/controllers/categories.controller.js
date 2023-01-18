const mongoose = require("mongoose");
const Product = require('../models/Products');

const getCategoryCases = async (req, res) => {
    const categories = await Product.find({category: "cases"});
    res.json(categories);
};

const getCategoryKeyboard = async (req, res) => {
    const categories = await Product.find({category: "keyboards"});
    res.json(categories);
};

const getCategoryCaseFan = async (req, res) => {
    const categories = await Product.find({category: "case_fan"});
    res.json(categories);
};

const getCategoryPowerSupply = async (req, res) => {
    const categories = await Product.find({category: "power_supply"});
    res.json(categories);
};

const getCategoryRam = async (req, res) => {
    const categories = await Product.find({category: "ram"});
    res.json(categories);
};

const getCategoryCpuFan = async (req, res) => {
    const categories = await Product.find({category: "cpu_fan"});
    res.json(categories);
};

const getCategoryMouse = async (req, res) => {
    const categories = await Product.find({category: "mouse"});
    res.json(categories);
};

const getCategoryGpus = async (req, res) => {
    const categories = await Product.find({category: "gpus"});
    res.json(categories);
};

const getCategoryMotherboard = async (req, res) => {
    const categories = await Product.find({category: "motherboard"});
    res.json(categories);
};

const getCategoryProccessors = async (req, res) => {
    const categories = await Product.find({category: "proccessors"});
    res.json(categories);
};

const getCategoryStorages = async (req, res) => {
    const categories = await Product.find({category: "storages"});
    res.json(categories);
};


module.exports = {
    getCategoryCases,
    getCategoryKeyboard,
    getCategoryCaseFan,
    getCategoryPowerSupply,
    getCategoryRam,
    getCategoryCpuFan,
    getCategoryMouse,
    getCategoryGpus,
    getCategoryMotherboard,
    getCategoryProccessors,
    getCategoryStorages,

};