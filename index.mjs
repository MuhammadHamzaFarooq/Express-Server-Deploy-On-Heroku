import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;


let user = {
    name: 'Muhammad Hamza Farooq',
    age : 21,
    city : "Karachi"
}
app.get('/',(req,res)=>{
    res.send("Express Server Deploy On Heroku")
});

app.get('/user',(req,res)=>{
    res.json({
       message:"User Request Successfully Handle",
       user 
    })
});



app.listen(PORT,()=>{
    console.log(`Server is upon running on port ${PORT}`);
})