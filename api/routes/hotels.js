import express from "express";
import {
         createHotel,
         deleteHotel,
         updateHotel,
         getHotel,
         getHotels,
         countByCity
        } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel)

//UPDATE

router.put("/:id",verifyAdmin, updateHotel)

//DELETE

router.delete("/find/:id",verifyAdmin,deleteHotel)

//GET

router.get("/find/:id", getHotel)

//GETALL
 
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", getHotels)


export default router