const express = require("express");
const router = express.Router();

const {
  createBrand,
  getBrands,
  updateStatus,
} = require("../controllers/brandControllers");

router.get("/brands", getBrands);
router.post("/brands", createBrand);
router.put("/brands/:id", updateStatus);

module.exports = router;