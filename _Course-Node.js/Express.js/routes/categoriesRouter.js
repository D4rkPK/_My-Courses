const express = require("express");

const router = express.Router();

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get("/", async (req, res) => {
  const categories = await service.find();
  res.status(200).json({
    message: "Categories listed",
    data: categories,
  });
});

router.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);
  res.status(200).json({
    message: "Category retrieved",
    data: category,
  });
});

router.post("/categories", async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json({
    message: "Category created",
    data: newCategory,
  });
});

router.patch("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categories = await service.update(id, body);
  res.status(200).json({
    message: "Category updated",
    data: categories,
  });
});

router.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const categories = await service.delete(id);
  res.status(200).json({
    message: "Category deleted",
    data: categories,
  });
});

module.exports = router;
