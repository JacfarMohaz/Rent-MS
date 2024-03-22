const express = require("express")
const rentController = require("../controller/rentController")
const uploadDocument = require("../middleware/DocumentUpload")

const router = express.Router()


router.post("/create/rent", uploadDocument.single("file"), rentController.RegisterNewRent)
router.get("/read/rent", rentController.getRentData)
router.get("/getall/rents",rentController.getAllofSiteRents)
router.get("/gettotalcost/rents",rentController.getTotalRentCost)
router.get("/search/rent/:key", rentController.searchRentInfo)
router.get("/getsingle/rent/:id", rentController.readSingleRent)
router.delete("/delete/rent/:id", rentController.DeleteRent)
router.put("/update/rent/:id", rentController.UpdateRents)


module.exports = router
