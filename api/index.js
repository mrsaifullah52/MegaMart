const express = require('express');
const app = express();

const port = 9000;

app.get("/",(req,res)=>{
  res.send("Hello from backend")
});

app.listen(port,()=>{
  console.log(`Express app is running on port: ${port}` )
})