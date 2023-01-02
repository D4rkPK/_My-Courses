const express = require("express");

const router = express.Router();

router.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get("/categories", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
  ]);
});

router.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Category 1",
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
  res.status(200).json({
    message: "Category updated",
    data: body,
    id,
  });
});

router.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "Category deleted",
    id,
  });
});

module.exports = router;
