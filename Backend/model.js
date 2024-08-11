//Write missing codes here
const mongoose=require('mongoose')
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const BlogData = mongoose.model('employee', schema);
module.exports = BlogData;
//Write missing codes here