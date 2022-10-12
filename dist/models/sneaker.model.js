"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sneaker = void 0;
const mongoose_1 = require("mongoose");
const sneakerSchema = new mongoose_1.Schema({
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
    },
    imagen: {
        type: String,
    },
    precio: {
        type: String,
    }
});
exports.Sneaker = (0, mongoose_1.model)('Sneaker', sneakerSchema);
