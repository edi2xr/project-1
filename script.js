document.addEventListener("DOMContentLoaded", function () {
  let totalIncome = 0;
  let totalExpenses = 0

  const incomeInput = document.getElementById("income-input");
  const setIncomeBtn = document.getElementById("set-income-btn");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const addExpenseBtn = document.getElementById("add-expense-btn");

  onst totalIncomeDisplay = document.getElementById("total-income");
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");
  const expenseList = document.getElementById("expense-list");
  const toggleSummaryBtn = document.getElementById("toggle-summary-btn");
  const summarySection = document.getElementById("summary-section");
