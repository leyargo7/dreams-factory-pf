const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    img: {
        type: String,
        
    },
    rating: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        
    },
    brand: {
        type: String,
        trim: true,
    },
    model: {
        type: String,
        trim: true,
    },
    sidePanel: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    cabinetType: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        default: "",
        trim: true,
    },
    inStock: {
        type: Number,
        default: 5,
    },
    category: {
        type: String,
        trim: true,
    },
    quantity: {
        type: String,
        trim: true,
    },
    style: {
        type: String,
        trim: true,
    },
    backlit: {
        type: String,
        trim: true,
    },
    wireless: {
        type: String,
        trim: true,
    },
    rpm: {
        type: String,
        trim: true,
    },
    airFlow: {
        type: String,
        trim: true,
    },
    noiseLevel: {
        type: String,
        trim: true,
    },
    efficiency: {
        type: String,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    trackingMethod: {
        type: String,
        trim: true,
    },
    storageInterface: {
        type: String,
        trim: true,
    },
    memory: {
        type: String,
        trim: true,
    },
    clockSpeed: {
        type: String,
        trim: true,
    },
    chipset: {
        type: String,
        trim: true,
    },
    formFactor: {
        type: String,
        trim: true,
    },
    memorySlots: {
        type: String,
        trim: true,
    },
    socketType: {
        type: String,
        trim: true,
    },
    speed: {
        type: String,
        trim: true,
    },
    cacheMemory: {
        type: String,
        trim: true,
    },
    cosito: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', ProductSchema);