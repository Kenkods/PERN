import {responseTickets, getResponse} from "../models/responseTickets.js";

export async function addresponse(req,res){

    const {ticketId}=req.params;
    const {message}=req.body;
    const responder_id=req.user.id;

    try{
        const response= await responseTickets(ticketId, responder_id, message);
        res.status(201).json(response);
    }
    catch(error){
        console.error("Error: s" , error)
        res.status(500).json({message:"Failed to add response!"});
    }

}
export async function fetchResponse(req,res) {

    const {ticketId}=req.params;
    try{
        const respo= await getResponse(ticketId);
        res.status(200).json(respo);
    }
    catch(error){
        res.status(500).json({message:"Failed to fetch responses"});
    }
    
}