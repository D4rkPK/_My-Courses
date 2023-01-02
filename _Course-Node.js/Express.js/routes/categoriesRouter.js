const express = require("express");

const router = express.Router();

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get("/", (req, res) => {
  const categories = service.find();
  res.status(200).json({
    message: "Categories listed",
    data: categories,
  });
});

router.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.status(200).json({
    message: "Category retrieved",
    data: category,
  });
});

router.post("/categories", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Category created",
    data: body,
  });
});

router.patch("/categories/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categories = service.update(id, body);
  res.status(200).json({
    message: "Category updated",
    data: categories,
  });
});

router.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const categories = service.delete(id);
  res.status(200).json({
    message: "Category deleted",
    data: categories,
  });
});

module.exports = router;
