const mongoose = require("mongoose")

const rentSchema = mongoose.Schema({
    sn:{
        type: Number,
        required: true,
        unique: true
    },
    siteName:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    landlordName:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    sitePost:{
        type: String,
        required: true
    },
    rentCost:{
        type: Number,
        required: true
    },
    file:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("rents", rentSchema)