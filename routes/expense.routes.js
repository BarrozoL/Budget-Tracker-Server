const router = require("express").Router();
const Expense = require("../models/Expense.model");

router.get("/expenses", async (req, res, next) => {
  try {
    const foundExpenses = await Expense.find();
    res.status(200).json(foundExpenses);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/expense", async (req, res, next) => {
  const { name, ammount, date, category } = req.body;

  try {
    const newExpense = Expense.create({
      name,
      ammount,
      date,
      category,
    });
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
});

module.exports = router;
