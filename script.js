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

  setIncomeBtn.addEventListener("click", function () {
    const income = parseFloat(incomeInput.value);
    if (!isNaN(income)) {
      totalIncome = income;
      updateSummary();
      incomeInput.value = "";
    }
  });

   addExpenseBtn.addEventListener("click", function () {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      totalExpenses += amount;

      const li = document.createElement("li");
      li.textContent = ${name}: Ksh ${amount.toFixed(2)};
      expenseList.appendChild(li);

      updateSummary();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });