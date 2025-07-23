import express from "express";

const app = express();

const PORT= 3000;

app.get('/', (req, res)=>{
    res.send('Hellow from express World');
});

app.listen(PORT,()=>{
    console.log("Serving is Listening at Port 3000!");
});
