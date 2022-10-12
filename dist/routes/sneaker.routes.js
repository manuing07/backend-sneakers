"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sneaker_model_1 = require("../models/sneaker.model");
const sneakerRoutes = (0, express_1.Router)();
sneakerRoutes.get('/pagin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const sneaker = yield sneaker_model_1.Sneaker.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        msj: "Get OK",
        sneaker
    });
}));
sneakerRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sneaker = yield sneaker_model_1.Sneaker.find();
    return res.json({
        ok: true,
        msj: "Get OK",
        sneaker
    });
}));
sneakerRoutes.post('/', (req, res) => {
    const data = req.body;
    const sneaker = {
        marca: data.marca,
        modelo: data.modelo,
        imagen: data.imagen,
        precio: data.precio
    };
    sneaker_model_1.Sneaker.create(sneaker).then(sneakerDb => {
        console.log(sneakerDb);
        return res.json({
            ok: true,
            msj: "Registro creado correctamente",
            sneakerDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "Ocurrio un error al crear el registro",
            err
        });
    });
});
sneakerRoutes.put('/:id', (req, res) => {
    const sneakerId = req.params.id;
    const sneaker = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        imagen: req.body.imagen,
        precio: req.body.precio
    };
    sneaker_model_1.Sneaker.findByIdAndUpdate(sneakerId, sneaker).then(sneakerDb => {
        return res.json({
            ok: true,
            sneakerDb
        });
    });
});
sneakerRoutes.delete('/', (req, res) => {
    const sneakerId = req.query.id;
    sneaker_model_1.Sneaker.findByIdAndDelete(sneakerId).then(sneakerDb => {
        return res.json({
            ok: true,
            sneakerDb
        });
    });
});
exports.default = sneakerRoutes;
