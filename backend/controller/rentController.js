const rentModel = require("../model/rentModel")


// create new Data
const RegisterNewRent = async (req, res) => {
    const newRent = rentModel( {
        sn: req.body.sn,
        siteName: req.body.siteName,
        district: req.body.district,
        landlordName: req.body.landlordName,
        phone: req.body.phone,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        sitePost: req.body.sitePost,
        rentCost: req.body.rentCost,
        file: req.file.filename
    })
    const saveRent = await newRent.save()
    if(saveRent){
        res.send(saveRent)
    }
}


// read rent all data
const getRentData = async (req, res) => {
    const readData = await rentModel.find()
    if(readData){
        res.send(readData)
    }
}


// get all Rents
const getAllofSiteRents = async (req, res) =>{
    const total = await rentModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}


// get total salary
const getTotalRentCost = async (req,res) => {
    const totalRentCost = await rentModel.aggregate([
        {
            $group: {_id: null, rentCost: {$sum: "$rentCost"}}
        }
    ])
    if(totalRentCost){
        res.send(totalRentCost)
    }
}

// search Reant
const searchRentInfo = async (req, res) => {
    const searchData = await rentModel.find({
        $or: [
            {siteName: {$regex: req.params.key}}
        ]
    })

    if(searchData){
        res.send(searchData)
    }
}


// read sigle Data by ID
const readSingleRent = async (req, res) => {
    const getSingleRent = await rentModel.find({_id: req.params.id})
    if(getSingleRent){
        res.send(getSingleRent)
    }
}


// delete rent
const DeleteRent = async (req, res) => {
    const removeRent = await rentModel.deleteOne({_id: req.params.id})
    if(removeRent){
        res.send("Rent delete success")
    }
}


// update Rent Data
const UpdateRents = async (req, res) => {
    const putRents = await rentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(putRents){
        res.send("Update success")
    }
}


module.exports = {RegisterNewRent, getRentData, getAllofSiteRents, getTotalRentCost, searchRentInfo, readSingleRent, DeleteRent, UpdateRents}