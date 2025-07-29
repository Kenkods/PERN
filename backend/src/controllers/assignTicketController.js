import { assignTickets } from "../models/assignTickets.js";

export async function assignTicketController(req,res){

    const {ticketId}=req.params;
    const {adminId}=req.body;

    try{
        await assignTickets(ticketId, adminId);
        res.status(200).json({message: "Ticket is Assigned successfully!" });

        
    }
    catch(error){
        console.log("Error assigning tickets : ", error);
        res.status(500).json({error: "Failed assigning ticket"});
    }
}