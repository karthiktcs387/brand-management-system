const Brand = require("../models/Brand");

const createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.json(brand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updatedBrand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBrand,
  getBrands,
  updateStatus,
};