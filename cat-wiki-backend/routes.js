const express = require("express");
const catController = require("./controller");

const router = express.Router();

router.get("/breeds", catController.getAllBreeds);

router.get("/breed", catController.getOneBreed);

router.get("/getOneImage", catController.getOneImage);

router.get("/catImages", catController.getCatImages);
module.exports = router;
