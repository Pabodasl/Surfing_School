const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
    Reqdata: {
      type: String,
      required: true,
      
    },
    Task: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
     
    },
    fund: {
      type: Number,
      required: true,
     
    },
    userId: {
      type: String,
      default: null,
    },
    userName: {
      type: String,
      default: null,
    },
   
  },
  { timestamps: true }
);


module.exports = mongoose.model("Equipment", equipmentSchema);