const { connect, default: mongoose } = require('mongoose');

const { MONGODB_URL } = require('../config');

(async ()=> {
    mongoose.set('strictQuery', true);
    const db = await connect(MONGODB_URL);
    console.log('DB is connected to', db.connection.name);
})();
