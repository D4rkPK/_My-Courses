const express = require("express");
const faker = require("faker");
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
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price(), 10),
      image: faker.image.image(),
    });
  }
  res.json(products);
});

app.get("/products/filter", (req, res) => {
    res.send("Filter");
})

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
});

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

app.get("/users", (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
