const cors = require('cors');
const express = require('express');
const fs = require('fs');
const app = express()
const port = 5000

app.use(cors());   
app.use(express.json())


app.listen(port , () => {
    console.log(`Server running on port: ${port} `);
});


let data = 
{
    "empty":"true"
};

// const outputFile = "F:\\React-AR\\React-APP\\react_ar_app\\src\\components\\response.json";
const outputFile = "..\\src\\components\\response.json"

app.get("/test", (req , res) => {
    console.log("/test called! Android");
    res.json(data); 
} )// res.end;


function test(){
    fs.writeFileSync(outputFile,JSON.stringify(data, null, "\t"));
}

app.post('/addData' , (req , res) => {
    data = req.body;
    console.log("/addData called! Android");
    console.log(data);
    test();
    res.json(data);
} )
