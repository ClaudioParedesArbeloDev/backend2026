import express from 'express';

const router = express.Router();

//Array de productos
let food = [
  { name: "Hamburguesa", price: 100 },
  { name: "Banana", price: 20 },
  { name: "Soda", price: 40 },
  { name: "Pizza", price: 150 },
];

router.get("/", (req, res) => {
  let user = {
    name: "Jose",
    last_name: "Gomez",
    role: "admin",
  };

  res.render("index", {
    user: user,
    style: 'index.css',
    isAdmin: user.role === "admin",
    food,
  });
});

export default router;