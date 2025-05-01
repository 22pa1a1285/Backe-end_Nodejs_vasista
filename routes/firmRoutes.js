const express = require("express");
const firmController = require("../controllers/firmController");
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

// FIXED: include multer upload middleware
router.post(
  '/add-firm',
  verifyToken,
  firmController.upload.single('image'), // this processes form-data and populates req.body and req.file
  firmController.addFirm
);

const path = require('path');
router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.setHeader('Content-Type', 'image/jpeg'); // FIXED: was incorrect
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});

router.delete('/:firmId', firmController.deleteFirmById);

module.exports = router;
