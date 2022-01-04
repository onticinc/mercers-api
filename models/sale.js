// our first collection schema
// yard sale schema
const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
    saleName: String,
    location: String,
    saleDescription: String,
    time: String,
    date: String,
    categoryTags: String,
    zipCode: Number,
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;