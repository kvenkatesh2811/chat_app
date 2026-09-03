//Signup a new user
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";
//signup a new user
export const signup = async (req, res) => {
  // req.body → Get data sent by frontend
  const { fullName, email, password, bio } = req.body;
  try {
    if (!fullName || !email || !password || !bio) {
      // Check whether required fields are provided
      return res.json({ success: false, message: "missing details" });
    }
    // findOne() → Search MongoDB for existing user
    const user = await User.findOne({ email });
    // If user already exists, stop signup
    if (user) {
      return res.json({ success: false, message: "account already exists" });
    }
    // genSalt() → Generate random salt for password security
    const salt = await bcrypt.genSalt(10);
    // hash() → Convert plain password into hashed password
    const hashedPassword = await bcrypt.hash(password, salt);

    // new User() → Create a new Mongoose user document
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      bio,
    });
    await newUser.save(); // save() → Save new user to MongoDB
    // generateToken() → Create JWT token using user's MongoDB ID
    const token = generateToken(newUser._id);
    // json() → Send success response to frontend
    res.json({
      success: true,
      userData: newUser,
      token,
      message: "Account created successfully",
    });
  } catch (error) {
    // log() → Print error in backend terminal
    console.log(error.message);
    // json() → Send error response to frontend
    res.json({ success: false, message: error.message });
  }
};
//Controller to login a user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
        const token = generateToken(userData._id);
    // json() → Send success response to frontend
    res.json({
      success: true,
      userData,
      token,
      message: "Login successfully",
    });

  } catch (error) {
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
};
//Controller to check if user is authenticated
export const checkAuth=(req,res)=>{
 res.json({success:true,user:req.user});
}
//Controller to update user profile details
export const updateProfile=async(req,res)=>{
  try {
    const {profilePic,fullName,bio}=req.body;
   const userId=req.user._id;
   let updatedUser;
   if(!profilePic){
   updatedUser=await User.findByIdAndUpdate(userId,{fullName,bio},{new:true});
  }
else{
  const upload=await cloudinary.uploader.upload(profilePic);
  updatedUser=await User.findByIdAndUpdate(userId,{profilePic:upload.secure_url,bio,fullName},{new:true});
}
    res.json({success:true,user:updatedUser,message:"Profile updated successfully"});
  } catch (error) {
    console.log(error.message);
    res.json({success:false,message:error.message})
  }                                       
}