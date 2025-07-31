import express from "express";
import cors from "cors";
import {authentication, adminOnly} from "./src/middleware/auth.js";
import addUserRoute from "./src/routes/addUserRoute.js";
import ticketRoute from "./src/routes/ticketRoutes.js";
import assignTicketRoute from "./src/routes/assignTicketRoute.js";
import responsesRoute from "./src/routes/responsesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',addUserRoute);
app.use('/api',addUserRoute);

app.use('/api',authentication ,ticketRoute);
app.use('/api',authentication,adminOnly, assignTicketRoute);
app.use('/api',authentication, responsesRoute)
const PORT= 3000;

app.get('/', (req, res)=>{
    res.send('Hello from server');
});



app.listen(PORT,()=>{
    console.log("Server is Listening at Port 3000!");
   
});


