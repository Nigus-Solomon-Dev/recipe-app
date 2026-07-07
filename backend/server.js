require('dotenv').config();
const express=require('express');
const cors=require('cors');
const  mongoose=require('mongoose');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const app=express();
app.use(cors());
app.use(express.json());
//connecting to mongDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('data base connected'))
.catch((err)=>console.log('mongoDB',err));


app.use('/api/auth', authRoutes); 
app.use('/api/recipes', recipeRoutes);
app.get('/',(req,res)=>{
  res.send('hello');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log('hello connected');
  
});