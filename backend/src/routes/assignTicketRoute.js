import express from "express";
import {assignTicketController} from "../controllers/assignTicketController.js";

const router=express.Router();

router.put("/assign/:ticketId",assignTicketController);

export default router;