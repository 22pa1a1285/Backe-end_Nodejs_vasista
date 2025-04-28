const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config(); 

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=>console.log(error));

const vendorRoutes = require('./routes/vendorRoutes');
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productRoutes");
const bodyparser = require("body-parser");
const path = require('path');

app.use(bodyparser.json());

// 🟰 define welcome route here
app.get('/', (req, res) => {
    res.send("<h1>welcome to vasista</h1>");
});

// then define your APIs
app.use('/vendor', vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/product", productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`server started and running successfully at ${PORT}`);
});
