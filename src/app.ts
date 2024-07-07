import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes"
import db from './config/mongo'
const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors()); //dejar que cualquier dominio consuma el api
app.use(express.json())
app.use(router)
db().then(()=> console.log('conexion ready'))
app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));

