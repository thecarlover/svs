import express from 'express';
const app=express();
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import voteRoutes from './routes/voteRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

// app.use('/',(req,res)=>{
//     res.send('Welcome to the voting system');
// })
app.use('/api/vote', voteRoutes);
app.use('/api/candidates', candidateRoutes);


const PORT = process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

