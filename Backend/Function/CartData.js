const express = require('express');
const Note = require('../model/CartData'); // Assuming CartData is your Mongoose model
const app = express();
app.use(express.json());
app.post('/', async (req, res) => {
  try {
    // Destructuring data from the request body
    const { description, name, price, img, id } = req.body;

    // Basic validation (optional, can be extended)
    if (!name || !price || !id) {
      return res.status(400).json({ message: "Name, price, and id are required" });
    }

    const cartItem = await Note.findOne({ name });
    if(cartItem){
        return   res.send({message:"already in cart"})
    }
    // Create a new cart data entry using the data
    const cartData = new Note({
      description,
      name,
      price,
      img,
      id,
    });

    // Save the new cart data to the database
    const savedCartData = await cartData.save();

    // Send back the saved cart data with a 201 status code (Created)
    res.status(201).json(savedCartData);
  } catch (e) {
    // Log the error and return a 500 error response
    console.error(e);
    res.status(500).json({ message: "Error saving cart data" });
  }
});

app.get('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Get the id from the URL parameter
  
      // Fetch the data from the database using the id
      const cartItem = await Note.find({ id }); // Find by id
  
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' }); 
      }
      res.json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching cart data' });
    }
  });

module.exports = app;
