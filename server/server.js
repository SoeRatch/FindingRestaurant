import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import restaurant from './routes/restaurant';
const path = require('path');

const app = express();
app.server = http.createServer(app);


mongoose.connect('mongodb://127.0.0.1/restaurantdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let root = path.join(__dirname,'..','dist/')

app.use(express.static(root));

app.use("/restaurant",restaurant);

app.get('/*',function(req,res){
	res.sendFile(path.join(__dirname,'../dist','index.html'));
});

app.server.listen(3000);
console.log("Started on port 3000");

export default app;
