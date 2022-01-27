import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Express Server Deploy On Heroku")
})

app.listen(PORT,()=>{
    console.log(`Server is upon running on port ${PORT}`);
})