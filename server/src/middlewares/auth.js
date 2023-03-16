const jwt = require("jsonwebtoken");
const User = require("../models/User");

// const auth = async function(req,res,next){
//     const token = req.cookies.jwt;
//     console.log("token2:"+token)
//     try{
//         console.log(process.env.SECRET_KEY)
//         let user = jwt.verify(token, process.env.SECRET_KEY)
//         const existing_user = await User.findOne({_id:user._id})
//         if(existing_user){
//         req.userId = user._id
//         next()}
//         else{
//             res.cookie("jwt",undefined,{
//                 httpOnly:true
//             })
//             res.redirect("/login")
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
//     return
// }

const isLoggedIn = async function(req, res,next){
    try{
        const user = await jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)
        existingUser = await User.findOne({_id: user._id})
        if(existingUser){
            res.send({status: 200, message: "user logged in"});
        }
        else{
            res.send({status: 400, message:"not logged in"})
        }
    }
    catch(err){
        res.send({status: 400, message:"not logged in"})
    }
}

module.exports = {isLoggedIn}