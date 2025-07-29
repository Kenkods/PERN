import  pool from "../config/db.js";

// register method
export async function createUser(email, name, hashedPassword, role) {
  const query = `
    INSERT INTO users (email, name, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, email, name, role;
  `;
  const values = [email, name, hashedPassword, role];
  const result = await pool.query(query, values);
  return result.rows[0];
}


//check email duplication
export async function findSimilarEmail(email){
    const query=`SELECT id, email, name, password, role from users where email =$1`;
    const result = await pool.query(query, [email]);
    return result.rows[0];

}


//login method
export async function login(email, password){
    const query=`SELECT id, email, name , password, role from users where email=$1`;
    const values=[email];
    const result = await pool.query(query, values);
    return result.rows.length === 1 ? result.rows[0] : null;

    

}