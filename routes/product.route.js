import express from "express"
import Product from "../models/Product.model.js";
import {getproduct, getProducts,postproduct,replaceproduct,deleteproduct} from "../controllers/product.controller.js"

const router = express.Router();
// get all products 
router.get("/", getProducts);
// get product by id 
router.get("/:id",getproduct)
// insert product 
router.post("/",postproduct);
// replace product 
router.put("/:id",replaceproduct)
// delete product 
router.delete("/:id",deleteproduct)

export default router;