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
  ammountSpent: {
    type: Number,
    required: true,
  },
  remainingBudget: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Month", MonthSchema);
