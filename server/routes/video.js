const router = require("express").Router();
const upload = require("../models/upload");


router.get("/:id", async (req, res) => {
    console.log(req.params['id']);
    try{
        const videos = await upload.findById(req.params['id']);
        res.status(200).send({
            status: true,
            message: "Video Fetched Successfully",
            data: videos.url,
            });
    }
    catch(err){
        res.status(400).send({
            status: false,
            message: err.message || "Internal Server Error",
            });
    }
})

module.exports = router;