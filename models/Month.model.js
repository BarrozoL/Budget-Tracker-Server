const mongoose = require("mongoose");

const MonthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  monthlyBudget: {
    type: Number,
    required: true,
  },
  amountSpent: {
    type: Number,
    required: true,
  },
  remainingBudget: {
    type: Number,
    required: true,
  },
  Expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
    },
  ],
});

module.exports = mongoose.model("Month", MonthSchema);
