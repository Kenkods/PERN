import pool from '../config/db.js';


export async function responseTickets(ticketId,responder_id, message){

   const query= `INSERT INTO responses(ticket_id, responder_id, message) VALUES ($1, $2, $3) RETURNING *;`;
    const values=[ticketId, responder_id, message];
    const result= await pool.query(query, values);
    return result.rows[0];

}


export async function getResponse(ticketId){
    const query=`SELECT r.*, u.name AS responder_name FROM responses r 
    LEFT JOIN users u ON r.responder_id= u.id
    WHERE r.ticket_id=$1 ORDER BY r.created_at ASC;`;

    const result= await pool.query(query,[ticketId]);
    return result.rows[0];
}
