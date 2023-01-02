const express = require("express");

const ProductService = require("../services/productService");

const router = express.Router();
const service = new ProductService();

router.get("/", (req, res) => {
  const products = service.find();
  res.status(200).json({
    message: "Products listed",
    data: products,
  });
});

router.get("/filter", (req, res) => {
  res.send("Filter");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json({
    message: "Product retrieved",
    data: product,
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Product created",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: "Product updated",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "Product deleted",
    id,
  });
});

module.exports = router;
