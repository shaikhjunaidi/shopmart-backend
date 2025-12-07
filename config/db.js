const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Debugging: Check if Render sees the variables
console.log("--------------------------------");
console.log("🔍 Checking Environment Variables:");
console.log("Host:", process.env.DB_HOST);
console.log("Port:", process.env.DB_PORT); // This is the one that was failing
console.log("User:", process.env.DB_USER);
console.log("--------------------------------");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, 
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();