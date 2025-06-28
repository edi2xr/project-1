document.addEventListener("DOMContentLoaded", function () {
  let totalIncome = 0;
  let totalExpenses = 0
  const incomeInput = document.getElementById("income-input");
  const setIncomeBtn = document.getElementById("set-income-btn");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const addExpenseBtn = document.getElementById("add-expense-btn");