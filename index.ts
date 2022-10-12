import Server from "./classes/server";
import defaulRoutes from "./routes/default.routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import sneakerRoutes from "./routes/sneaker.routes";
import cors from 'cors'


const server = new Server();

server.app.use(cors());
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use('/',defaulRoutes);
server.app.use('/sneaker', sneakerRoutes);

mongoose.connect('mongodb+srv://usr_sneakers:sneakers2022@cluster0.ehz8x8y.mongodb.net/sneakersDb', (error)=>{
    if(error){
        throw error;
    }

    console.log("Base de datos online")
})

server.Start(()=>{
    console.log(`Servidor corriendo en el puerto:${server.port}`);
})