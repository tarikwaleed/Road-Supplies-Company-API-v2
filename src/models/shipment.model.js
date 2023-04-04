const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
        supplier: {
            type: String,
            required: true,
            enum: ['Supplier 1', 'Supplier 2', 'Supplier 3'],
        },
        customer: {
            type: String,
            required: true,
            enum: ['Customer 1', 'Customer 2', 'Customer 3'],
        },
        material: {
            type: String,
            required: true,
            enum: ['Material 1', 'Material 2', 'Material 3'],
        },
        carriage_price: {
            type: Number,
            required: true,
        },
        material_price: {
            type: Number,
            required: true,
        },
        vehicle_number: {
            type: String,
            required: true,
        },
        cart_number: {
            type: String,
            required: true,
        },
        vehicle_volume: {
            type: Number,
            required: true,
        },
        driver_name: {
            type: String,
            required: true,
        },
        carrier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Carrier',
            required: true,
        },
    },
    { timestamps: true },
);

shipmentSchema.virtual('total_price').get(function () {
    return this.carriage_price * this.material_price * this.vehicle_volume;
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
