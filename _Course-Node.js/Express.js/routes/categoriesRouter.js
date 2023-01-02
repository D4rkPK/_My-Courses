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

module.exports = router;
