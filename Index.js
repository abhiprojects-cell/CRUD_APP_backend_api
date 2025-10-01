import express, { urlencoded } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Product from "./models/Product.model.js"
import ProductRoute from "./routes/product.route.js";

dotenv.config();
//middle ware 
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// env 
const PORT = process.env.PORT || 5000;
const MONG_URL = process.env.MONG_URL;

app.get("/", (req,res)=>{
    res.send("hello from node api ");
})

// routes 
app.use("/api/products",ProductRoute)

// mongoose connection 
mongoose
  .connect(MONG_URL)
  .then(() => { 
    console.log("mongodb connceted succesfully")
         app.listen(PORT,()=>{
      console.log(`server sunning on ${PORT}`)
    })
}
)
.catch((err) => console.log("mongodb conncetion failed ", err.message))


