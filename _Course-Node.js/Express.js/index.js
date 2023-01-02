const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/products", (req, res) => {
  res.json([
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 200,
    },
  ]);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "Product 2",
    price: 1000,
  });
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId,
    });
})

app.get("/categories", (req, res) => {
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

app.get("/categories/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Category 1",
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
