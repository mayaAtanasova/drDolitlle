const mongoose = require('mongoose');

const Service = mongoose.model(
    'Service',
    new mongoose.Schema({
        description: { type: String, required: true },
        price: { type: Number, required: true },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceCategory'
        }
    })
);

module.exports = Service;