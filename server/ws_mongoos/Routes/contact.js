const express = require("express");
const router = express.Router();
const contact = require("../Models/contactModel");

router.post("/addContact", async (req,res)=>{
try{
    const newContact = {
         fullName: req.body.fullName,
         email: req.body.email,
         phoneNumber: req.body.phoneNumber,
         birthdate: req.body.birthdate
    }
    const result = await contact.create(newContact)
    res.send({msg: "contact added !", result})
    } catch (error){
        console.log(error);
        res.status(500).json("Internal server error", error)
    } 
})

router.get("/getContacts", async (req, res) =>{
try{
    const result = await contact.find()
    res.send(result)

}
 catch (error){
    console.log(error);
    res.status(500).json("Internal server error", error)

}
})

router.get("/getContact/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        const result = await contact.findById({_id:id})
        res.send({msg: "Contact loaded !", result})
    
    }
     catch (error){
        console.log(error);
        res.status(500).json("Internal server error", error)
    
    }
    })

    router.delete("/deleteContact/:id", async (req, res) =>{
        try{
            const id = req.params.id;
            const result = await contact.findByIdAndDelete({_id:id})
            res.send({msg: "Contact deleted !", result})
        
        }
         catch (error){
            console.error(error);
            res.status(500).json("Internal server error", error)
        
        }
        })

        router.put("/updateContact/:id", async (req, res) =>{
            try{
                const id = req.params.id;
                const result = await contact.findOneAndUpdate({_id:id}, {$set: req.body})
                res.send({msg: "Contact updated !", result})
            
            }
             catch (error){
                console.error(error);
                res.status(500).json("Internal server error", error)
            
            }
            })  


module.exports = router;
