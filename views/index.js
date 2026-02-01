import express from 'express';
import  path from 'path';
import todoRoutes from '../routes/todoRoutes.js';

const app = express();
const publicPath = path.resolve('public') // css ko add 

app.use(express.static(publicPath)); // css ko add
app.set('view engine', 'ejs');  //  ejs file ko connect karenge  or express


app.use(express.urlencoded({extended:false}))
app.use('/', todoRoutes);


app.listen(3300);
