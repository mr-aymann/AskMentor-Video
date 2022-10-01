const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
const moongoose = require('mongoose');
const routes= require('./routes');

const uri=
`mongodb://connectAdmin:Ayman123@ac-a2dzual-shard-00-00.zw693le.mongodb.net:27017,ac-a2dzual-shard-00-01.zw693le.mongodb.net:27017,ac-a2dzual-shard-00-02.zw693le.mongodb.net:27017/?ssl=true&replicaSet=atlas-13ojkl-shard-0&authSource=admin&retryWrites=true&w=majority`

moongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = moongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})



app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });
 
app.use(cors());

app.use('/upload',  routes);
app.get('/', (req, res) => {
    res.send('Hello this is Cloudinary Site Demo');
});

const port = process.env.PORT || 8000;




app.listen(port, () => 
console.log(`Server is running on port ${port}`));
