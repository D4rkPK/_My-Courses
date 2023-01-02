const express = require("express");

const ProductService = require("../services/productService");

const router = express.Router();
const service = new ProductService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.status(200).json({
    message: "Products listed",
    data: products,
  });
});

router.get("/filter", (req, res) => {
  res.send("Filter");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(200).json({
    message: "Product retrieved",
    data: product,
  });
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: "Product created",
    data: newProduct,
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json({
      message: "Product updated",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.status(200).json({
    message: "Product deleted",
    data: product,
  });
});

module.exports = router;
