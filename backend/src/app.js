const express = require('express');
const app = express();
const PORT = 7777;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})