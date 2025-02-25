const router = require("express").Router();
const Month = require("../models/Month.model.js");

router.get("/months", async (req, res, next) => {
  try {
    const months = await Month.find();
    res.status(200).json(months);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
});

router.get("/months/:monthName", async (req, res, next) => {
  const { monthName } = req.params;
  try {
    const month = await Month.findOne({ name: monthName });
    if (!month) {
      res.status(404).json({ message: "Month not found" });
      return;
    }
    res.status(200).json(month);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
});

router.post("/month", async (req, res, next) => {
  const { name, monthlyBudget, amountSpent, remainingBudget } = req.body;

  try {
    const newMonth = await Month.create({
      name,
      monthlyBudget,
      amountSpent,
      remainingBudget,
    });
    res.status(201).json(newMonth);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
});

router.put("/month/:monthName", async (req, res, next) => {
  const { monthName } = req.params;
  const { monthlyBudget, remainingBudget, amountSpent } = req.body;

  try {
    const editedMonth = await Month.findOneAndUpdate(
      { name: monthName },
      { monthlyBudget, remainingBudget, amountSpent },
      { new: true }
    );
    if (!editedMonth) {
      res.status(404).json({ message: "Month not found" });
      return;
    }
    res.status(200).json(editedMonth);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    next(err);
  }
});

module.exports = router;
