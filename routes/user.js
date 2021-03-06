const express =require("express")

const router =express.Router();

const {userById} = require("../controllers/user");
const {requireSignin, isAuth, isAdmin} = require("../controllers/auth");

router.get("/secret/:userId", requireSignin, isAuth, (req, res)=>{
    res.json(
        {
            user: req.profile
        }
    )
});

router.param('userID', userById)
module.exports=router;
