const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
    'mongodb+srv://anees:anees123@cluster0.0salm.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });