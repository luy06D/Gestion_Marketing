import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (rep, res) => {
    res.send('Backend NodeJS corriendo.... ');
});

app.listen(port, ()=>{
    console.log("PORT =>", port);
});