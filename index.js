import express from 'express'
import mongoose from 'mongoose'
import productRoute from './routes/product.route.js'

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Connect to the database Node-API
mongoose.connect('mongodb+srv://admin:XfjqbLbhOXmnRFAV@backenddb.ekcnrdq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to database')
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
}).catch(() => {
   console.log('Connected failed to connect to database')
});

//Testing
app.get("/", (req, res) => {
  res.send("Hello from Node API")
});

//Product routes
app.use("/api/products", productRoute)
