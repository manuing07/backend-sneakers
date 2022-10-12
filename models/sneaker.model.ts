import { Document, model, Schema } from "mongoose";


const sneakerSchema = new Schema({

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
    precio:{
        type: String,
    }
})

interface ISneaker extends Document{
    marca: string;
    modelo: string; 
    imagen: string;
    precio: string;
}

export const Sneaker = model<ISneaker>('Sneaker', sneakerSchema);