import pool from "../config/db.js";

export async function assignTickets(ticketId, adminId)
{

    const query=`
    Update tickets  SET assigned_to=$1, status= 'assigned'
    WHERE id=$2`;
    await pool.query(query,[adminId, ticketId]);
}