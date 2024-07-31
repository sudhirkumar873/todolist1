import express from "express"
import { create, deleteOne, getAllData, getOne, update } from "../controller/userController.js"

const route= express.Router();

route.post("/create", create);
route.get("/getall", getAllData);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteOne)

export default route;