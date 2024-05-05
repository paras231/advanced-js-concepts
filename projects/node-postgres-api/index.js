import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import User from "./models/User.js";
import { sequelize } from "./dbConnect.js";

dotenv.config();

const PORT = 5000;
//  connect to postgres db

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();

app.use(express.json());

//  api routes

/**
 * create new user
 */

app.post("/api/create/user", async (req, res) => {
  const { email, age, fullName } = req.body;
  try {
    //  find user
    const userExists = await User.findOne({where: {email: email}});
    if(userExists){
        return res.status(400).json({msg:"User already exists"})
    }
    const newUser = await User.create({
      email,
      fullName,
      age,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({msg:error.message});
  }
});

app.listen(PORT, () => {
  console.log("listening on port 5000");
});
