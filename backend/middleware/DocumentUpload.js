const multer = require("multer")


// file section
const strogeLocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "documents")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: strogeLocation
})

module.exports = upload