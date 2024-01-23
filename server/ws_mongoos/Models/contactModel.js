const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
fullName:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
phoneNumber:{
    type: Number,
    required: true
},
birthdate:{
    type: Number,
    required: true
}


})
 const Contact = mongoose.model("Contact", contactSchema)
 module.exports = Contact;