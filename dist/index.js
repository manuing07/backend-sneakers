"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const sneaker_routes_1 = __importDefault(require("./routes/sneaker.routes"));
const server = new server_1.default();
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/sneaker', sneaker_routes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/sneakersDb', (error) => {
    if (error) {
        throw error;
    }
    console.log("Base de datos online");
});
server.Start(() => {
    console.log(`Servidor corriendo en el puerto:${server.port}`);
});
