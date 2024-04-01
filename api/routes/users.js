import express from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifytoken.js";

const  router =  express.Router();

/*router.get("/checkauthenticatication",verifyToken,(req,res,next) => {
     res.send("hello user,you are logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next) => {
    res.send("hello user,you are logged in you can delete your account" )
})

router.get("/checkadmin/:id",verifyUser,verifyAdmin,(req,res,next) => {
    res.send("hello admin,you are logged in you can delete all account" )
})
*/

//UPDATE

router.put("/:id",verifyUser, updateUser)

//DELETE

router.delete("/:id",verifyUser,deleteUser)

//GET

router.get("/:id",verifyUser, getUser)

//GETALL

router.get("/",verifyAdmin, getUsers)


export default router