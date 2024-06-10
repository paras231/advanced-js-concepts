import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import bcrypt, { hash } from "bcrypt";
import { responseJson } from "./utils/responseHandler.js";
const app = express();

dotenv.config();

//  db connection

const conn = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//   connect to db

conn.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

// // create user table

// async function createUserTable() {
//   try {
//     await conn.query(`CREATE TABLE IF NOT EXISTS users(
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             username VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL UNIQUE,
//             age INT,
//             password VARCHAR(255) NOT NULL
//         )`);
//         console.log('table created');
//   } catch (error) {
//     console.log(error)
//   }
// }

// createUserTable();


// create user_events table which consists of user_id , event_id and many to many relationship




app.use(express.json());

// api endpoints

// create or register user Api

/**
 * register user
 *
 */

app.post("/api/register", async (req, res) => {
  try {
    const { username, email, age, password } = req.body;

    // Check if user exists
    const selectSql = "SELECT * FROM users WHERE email = ?";
    conn.query(selectSql, [email], async (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: err.message });
      }

      if (result.length > 0) {
        // If user exists, send an appropriate response
        return res.status(400).json({ msg: "User already exists" });
      }

      // Insert new user if not exists
      const insertSql =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      // hash password before inserting
      const hashedPassword = await bcrypt.hash(password, 10);
      conn.query(insertSql, [username, email, hashedPassword], (err, r) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ msg: err.message });
        }
        return res.status(201).json({ msg: "User created" });
      });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

/**
 * login user
 */

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const selectSql = "SELECT * FROM users WHERE email = ? AND password = ?";
    conn.query(selectSql, [email, password], async (err, result) => {
      if (err) {
        console.error(err);
        return responseJson(res, 400, "error", err);
      }
      if (result.length == 0) {
        return responseJson(res, 400, "User not found", {});
      }
      return responseJson(res, 200, "success", result[0]);
    });
  } catch (error) {
    return responseJson(res, 400, "failure", error);
  }
});

// create events


app.post("/api/create-event",async(req,res)=>{
  try {
    const {eventName,code} = req.body;
    const selectSql = `SELECT * FROM EVENTS WHERE event_code = ?`;
    conn.query(selectSql,[code],(err, result)=>{
      if(err){
        return responseJson(res,400,"Something went wrong",err);
      }
     if(result.length>0){
      return responseJson(res,400,"Event already exists with this code",result);
     }
     const insertQuery  = `INSERT INTO events (event_name,event_code) VALUES (?,?)`;
     conn.query(insertQuery,[eventName,code],(evtErr,r)=>{
          if(evtErr){
            return responseJson(res,400,"Something went wrong while creating event",evtErr);
          }
          if(r){
            return responseJson(res,200,"Event created",r);
          }
     })
    })
  } catch (error) {
    return responseJson(res,400,"Can not create event",error);
  }
})


app.listen(3000, () => {
  console.log("node-mysql server started");
});
