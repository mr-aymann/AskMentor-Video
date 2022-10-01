const router = require("express").Router();
const upload = require("../models/upload");
const video= require("./video");


router.post("/", async (req, res) => {
    const { title, url, desc, thumbnail } = req.body;
    console.log(req.body);

    try {
        await upload.create({
            title,
            url,
            desc,
            thumbnail,
        })
        .then(() => {
            res.status(200).send({
            status: true,
            message: "Video Uploaded Successfully",
            
            });
        })
        .catch((err) => {
            res.status(400).send({
            status: false,
            message: err.message || "Bad format.",
            });

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
        status: false,
        message: err.message || "Internal Server Error",
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const videos = await upload.find();
        res.status(200).send({
        status: true,
        message: "Videos Fetched Successfully",
        data: videos,
        });
    } catch (err) {
        console.log(err);
        res.status(400).send({
        status: false,
            
        message: err.message || "Internal Server Error",
        });
    }
});

router.use("/find", video)

module.exports = router;













module.exports = router;
