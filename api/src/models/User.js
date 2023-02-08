const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        //required: true,
    },
    address: {
        type: String,
        trim: true,
        default: 'empty',
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'client',
    },
    purchases: {
        type: Array,
        default: [],
    },
    erased: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('User', UserSchema);