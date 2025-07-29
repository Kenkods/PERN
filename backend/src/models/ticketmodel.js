import  pool from "../config/db.js";

export async function createTicket({userId,title,description, urgency}){
    const result = await pool.query(
        `INSERT INTO tickets (user_id, title, description, urgency) VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [userId,title, description, urgency]
    );
    return result.rows[0];
}