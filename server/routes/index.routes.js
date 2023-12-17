const router = require("express").Router();
const multer = require("multer");

const voiceFile = multer({ folder: 'voiceFiles/' })
router.post("/voice", voiceFile.single('audio'));

module.exports = router;
