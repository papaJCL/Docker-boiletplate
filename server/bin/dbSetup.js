const pool = require("../db");

async function dbInit(){
    try{
        const result = await pool.query("create database if not exists login;");
        console.log(result);
        const users = await pool.query(" create table if not exists users (user_id serial not null primary key,user_name VARCHAR(255) NOT NULL,user_email VARCHAR(255) NOT NULL UNIQUE,user_password VARCHAR(255) NOT NULL);");
        console.log(users);
    }catch(err){
    		console.log(err.message);
    }
}
dbInit();