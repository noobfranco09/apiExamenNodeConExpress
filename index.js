import  express,{json} from 'express';
import cors from 'cors';
import  router from './modulos/provedores/provedores.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/apiTaller', router);

app.listen('4100')
{
    console.log('Ejecutándose correctamente en el puerto 4100');
}

