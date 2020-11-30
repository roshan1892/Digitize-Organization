const express = require('express');
const app = express.Router()
const bodyParser = require('body-parser');
const user = require('../models').User;
const address = require('../models').Address;



app.post('/',async(req,res)=>{


  const savedAddressObject = await address.create({
    temporaryAddress : req.body.temporaryAddress,
    permanentAddress: req.body.permanentAddress,
    permanentHouseNumber: req.body.permanentHouseNumber
  });

  try{
   const savedUser =  await user.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email:req.body.email,
    addressId: savedAddressObject.id
   })
   res.json(savedUser)
  }catch(er){
   res.send('Error '+er)
  }
})

app.get('/:id',async(req,res)=>{
  try{
    console.log(req.body.rod);

    const userFromDB = await user.findOne({ where: {id:  req.params.id}, include: [address] })
    res.json(userFromDB)
  }catch(er){
   res.send('Error '+er)
  }
})

app.get('/',async(req,res)=>{
  try{
    const userFromDB = await user.findAll({include: [address] })
    res.json(userFromDB)
  }catch(er){
   res.send('Error '+er)
  }
})

app.put('/:id',async(req,res)=>{
  const id = req.params.id;

  user.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating User with id=${id} and reason=${err}`
      });
    });
})

app.delete('/:id',async(req,res)=>{
  const id = req.params.id;

  user.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete User with id=${id} and reason = ${reason}`
      });
    });
})
module.exports = app
