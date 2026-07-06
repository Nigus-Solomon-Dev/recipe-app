const User=require('../models/User');
const jwt=require('jsonwebtoken');

//register
const register=async (req,res)=>{
  try{
  const { name , email , password }=req.body;
  const existingUser=await User.findOne({ email });
  if(existingUser){
    return res.status(400).json({error:'user already exists'});
  }
  //creating user
  const user=new User({ name, email , password });
  await user.save();
   res.status(201).json({
      message: 'User registered successfully',
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
//login 
const login=async (req,res)=>{
  try{
  const { email , password }=req.body;
 const user=await User.findOne({ email });
 if(!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    //create jwt token
    const token=jwt.sign(
      {id:user._id,email:user.email,name:user.name},
      process.env.JWT_SECRET,
      { expiresIn: '7d'}
    );
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}
module.exports = { register, login };