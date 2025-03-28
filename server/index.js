const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON body

// API Endpoint (Without Console Logging JSON Data)
//app.get("/api/example", (req, res) => {
  //  res.json({ message: "Data received successfully" });
   // console.log("data recieved done");
//});
//app.post("/api/example",(req,res)=>{
  //  const {name}=req.body;
  //  console.log(name,"recived ");
//});
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
    console.log('Server is running on http://localhost:5000');
});

app.post("/login", (req, res) => {
    const { username } = req.body;
    console.log("Username received:", username);
    res.json({ message: `Hello, ${username}! Login successful.` });
    
  });
// Start Server
app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});