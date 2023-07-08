const express = require("express");
// const {
//   registerUser,
//   currentUser,
//   loginUser,
// } = require("../controllers/userController");
// const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", (req,res)=>{
    res.json({message:"Register the user"})
});

router.post("/login", (req,res)=>{
    res.json({message:"login user"})
});

router.get("/current", (req,res)=>{
    res.json({message:"Current the information"})
});

module.exports = router;