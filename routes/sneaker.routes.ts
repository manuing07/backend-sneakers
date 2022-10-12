import { Request, Response, Router } from "express";
import { Sneaker } from "../models/sneaker.model";


const sneakerRoutes = Router();

sneakerRoutes.get('/pagin', async (req:Request, res:Response)=>{
    

    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip*perPage;
    const sneaker = await Sneaker.find().skip(skip).limit(perPage);

        return res.json({
            ok:true,
            msj: "Get OK",
            sneaker
        })
})

sneakerRoutes.get('/', async (req:Request, res:Response) => {

        const sneaker = await Sneaker.find();

        return res.json({
            ok:true,
            msj: "Get OK",
            sneaker
        })
});

sneakerRoutes.post('/', (req:Request, res:Response)=>{

    const data = req.body;

    const sneaker = {
        marca: data.marca,
        modelo: data.modelo, 
        imagen: data.imagen,
        precio: data.precio
    }

    Sneaker.create(sneaker).then(sneakerDb=>{
        console.log(sneakerDb);
        return res.json({
            ok:true,
            msj:"Registro creado correctamente",
            sneakerDb
        })
    }).catch(err=>{
        return res.json({
            ok:false,
            msj:"Ocurrio un error al crear el registro",
            err
        })
    })

});

sneakerRoutes.put('/:id', (req:Request, res:Response)=>{

    const sneakerId = req.params.id;
    const sneaker = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        imagen: req.body.imagen,
        precio: req.body.precio
    }

    Sneaker.findByIdAndUpdate(sneakerId, sneaker).then(sneakerDb=>{
        return res.json({
            ok:true,
            sneakerDb
        })
    })

});

sneakerRoutes.delete('/', (req:Request, res:Response)=>{

    const sneakerId = req.query.id;
    Sneaker.findByIdAndDelete(sneakerId).then(sneakerDb=>{
        return res.json({
            ok:true,
            sneakerDb
        })
    });
})

export default sneakerRoutes;