const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

const data='You will become even more awesome';

app.get('/data', (req, res)=>{
    res.status(200).send(data);
})

const port = 4000;
app.listen(port,()=>{
    console.log(`Hello @Port ${port}`)
})
