const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No limit and offset");
  }
});

router.post("/users", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "User created",
    data: body,
  });
});

router.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: "User updated",
    data: body,
    id,
  });
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "User deleted",
    id,
  });
});

module.exports = router;
