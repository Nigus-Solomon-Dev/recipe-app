const jwt=require('jsonwebtoken');

const auth=(req,res,next)=>{
  try{
    console.log('i am in auth');
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    //verify token
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = auth;
