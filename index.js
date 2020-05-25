import express from 'express';
import path from 'path';
//var routes=require('./src/routes/demoRoutes.js')
import routes from './src/routes/demoRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';




const app=express();
const PORT=4005;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://mongo:27017/demodb',
{
    useNewUrlParser:true,
    useUnifiedTopology: true
}
);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'))

routes(app);
app.get('/' ,(req,res) =>           

res.send(`node runing in port ${PORT}`)

);

app.listen(PORT,() =>
 console.log("server started listening")
);
