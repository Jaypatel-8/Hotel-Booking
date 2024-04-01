import express from "express";
import {
    createRoom,
    deleteRoom,
    updateRoom,
    getRoom,
    getRooms 
   } from "../controllers/room.js";
const  router =  express.Router();
import { verifyAdmin } from "../utils/verifyToken.js"


//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)

//UPDATE

router.put("/:id",verifyAdmin, updateRoom)

//DELETE

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)

//GET

router.get("/:id", getRoom)

//GETALL

router.get("/", getRooms)



export default router