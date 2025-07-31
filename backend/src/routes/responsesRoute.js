import express from "express";
import { addresponse, fetchResponse } from "../controllers/responseController.js";

const router=express.Router();

router.post('/ticket/:ticketId/response', addresponse);

router.get('/ticket/:ticketId/fetchResponse', fetchResponse);

export default router;