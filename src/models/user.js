import  pool from "../config/db.js";


export async function createUser(email, name, age){

    const query= `INSERT INTO users (email, name, age) VALUES ($1, $2, $3) RETURNING *;`;

    const values=[email, name, age];

    const result=await pool.query(query,values);
    return result.rows[0];


}