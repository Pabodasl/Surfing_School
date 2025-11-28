
const Equipment = require("../Model/equipment.model.js");




//create suplier
 const createequiment = async (req, res, next) => {
  

  const {  name,Task,Reqdata,Quantity,fund,userId,userName } = req.body;

  const newEquipment = new Equipment({
   
    name,
    Reqdata,
    Task,
    Quantity,
    fund,
    userId: userId || null,
    userName: userName || null

   
    

  });
  try {
    const savedeuip = await newEquipment.save();
    res.status(201).json(savedeuip);
  } catch (error) {
    next(error);
  }
};




//get all suplier
 const getAllequiment = async (req, res, next) => {
  try {
    // Check if userId is provided in query params (for regular users)
    const { userId, isEquipmentManager } = req.query;
    
    let equipment;
    
    // If equipment manager, return all equipment
    if (isEquipmentManager === 'true') {
      equipment = await Equipment.find();
    } 
    // If userId is provided, return only that user's equipment
    else if (userId) {
      equipment = await Equipment.find({ userId: userId });
    } 
    // Otherwise return all (for backward compatibility, but should be filtered)
    else {
      equipment = await Equipment.find();
    }

    if (equipment.length > 0) {
      res.json({ message: "equipment detail retrieved successfully", equipment});
    } else {
      res.json({ message: "No equipment found", equipment: [] });
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};



//delete suplier
 const deleteequiment = async (req, res, next) => {

  try {
    await Equipment.findByIdAndDelete(req.params.EId);
    res.status(200).json("The equipment has been deleted");
  } catch (error) {
    next(error);
  }
};



//update suplier
 const updateequiment = async (req, res, next) => {
 
  try {
    const updateequipment = await Equipment.findByIdAndUpdate(
      req.params.EEId,
      {
        $set: {
         
        
          name: req.body.name,
          Reqdata: req.body.Reqdata,
          Task: req.body.Task,
          Quantity: req.body.Quantity,
          fund: req.body.fund,
        },
      },
      { new: true }
    );
    res.status(200).json(updateequipment);
  } catch (error) {
    next(error);
  }
};



exports.createequiment = createequiment;
exports.getAllequiment = getAllequiment;
exports.deleteequiment = deleteequiment;
exports.updateequiment = updateequiment;



