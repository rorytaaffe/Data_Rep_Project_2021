const express = require('express')
const app = express()
const port = 4000   // localhost:4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

const myConnectionString = 'mongodb+srv://admin:remote@cluster0.cl8jn.mongodb.net/players?retryWrites=true&w=majority';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(myConnectionString);
}

const Schema = mongoose.Schema;

var playerSchema = new Schema({
    name:String,
    age:String,
    picture:String
});

var PlayerModel = mongoose.model("player", playerSchema);

// gets the data
app.get('/api/players', (req, res) => {

    PlayerModel.find((err, data)=>{
        res.json(data);
    })

})


app.get('/api/players/:id', (req, res)=>{
    console.log(req.params.id);

    PlayerModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})


app.put('/api/players/:id', (req, res)=>{
    console.log("Update Player: " + req.params.id);
    console.log(req.body);

    PlayerModel.findByIdAndUpdate(req.params.id.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})


app.delete('/api/players/:id',(req,res)=>{
    console.log("Delete Player: " + req.params.id);

    PlayerModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})


app.post('/api/players', (req, res)=>{
    console.log('Player Received!');
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.picture);

    PlayerModel.create({
        name:req.body.name,
        age:req.body.age,
        picture:req.body.picture
    })

    res.send('Item Added')
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})