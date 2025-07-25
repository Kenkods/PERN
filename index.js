import express from "express";

import addUserRoute from "./src/routes/addUserRoute.js";

const app = express();
app.use(express.json());

app.use('/api',addUserRoute);

const PORT= 3000;

app.get('/', (req, res)=>{
    res.send('Hellow from express World');
});



app.listen(PORT,()=>{
    console.log("Serving is Listening at Port 3000!");
});
