import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "enter a name"],
    },

    quantity: {
      type: Number,
      required: [true, "plz select any number"],
      default: 0,
    },

    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    }
  },

  {
    timestamps: true
  }
)

const product = mongoose.model("product",productSchema)
export default product;

