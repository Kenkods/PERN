import express from "express";
import { handleTickets } from "../controllers/ticketsController.js";

const router= express.Router();

router.post("/tickets", handleTickets);

export default router;