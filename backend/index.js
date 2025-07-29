import express from "express";
import cors from "cors";
import {authentication} from "./src/middleware/auth.js";
import addUserRoute from "./src/routes/addUserRoute.js";
import ticketRoute from "./src/routes/ticketRoutes.js";
import assignTicketRoute from "./src/routes/assignTicketRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',addUserRoute);
app.use('/api',addUserRoute);

app.use('/api',authentication ,ticketRoute);
app.use('/api',authentication, assignTicketRoute);

const PORT= 3000;

app.get('/', (req, res)=>{
    res.send('Hellow from express World');
});



app.listen(PORT,()=>{
    console.log("Serving is Listening at Port 3000!");
   
});


