document.addEventListener("DOMContentLoaded", function () {
  let totalIncome = 0;
  let totalExpenses = 0;
  let expenses = [];

  const incomeInput = document.getElementById("income-input");
  const setIncomeBtn = document.getElementById("set-income-btn");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const addExpenseBtn = document.getElementById("add-expense-btn");

  const totalIncomeDisplay = document.getElementById("total-income");
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");
  const expenseList = document.getElementById("expense-list");

  const toggleSummaryBtn = document.getElementById("toggle-summary-btn");
  const summarySection = document.getElementById("summary-section");

  function loadSavedData() {
    const savedIncome = localStorage.getItem("income");
    const savedExpenses = localStorage.getItem("expenses");

    if (savedIncome) {
      totalIncome = parseFloat(savedIncome);
    }

    if (savedExpenses) {
      expenses = JSON.parse(savedExpenses);
      expenses.forEach(exp => {
        addExpenseToDOM(exp.name, exp.amount);
        totalExpenses += exp.amount;
      });
    }

    updateSummary();
  }

  setIncomeBtn.addEventListener("click", function () {
    const income = parseFloat(incomeInput.value);
    if (!isNaN(income)) {
      totalIncome = income;
      localStorage.setItem("income", income);
      updateSummary();
      incomeInput.value = "";
    }
  });

  addExpenseBtn.addEventListener("click", function () {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name !== "" && !isNaN(amount) && amount > 0) {
      totalExpenses += amount;

      const expense = { name, amount };
      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));

      addExpenseToDOM(name, amount);
      updateSummary();

      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  toggleSummaryBtn.addEventListener("click", function () {
    if (summarySection.style.display === "none") {
      summarySection.style.display = "block";
      toggleSummaryBtn.textContent = "Hide Summary";
    } else {
      summarySection.style.display = "none";
      toggleSummaryBtn.textContent = "Show Summary";
    }
  });

  function updateSummary() {
    totalIncomeDisplay.textContent = totalIncome.toFixed(2);
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    balanceDisplay.textContent = (totalIncome - totalExpenses).toFixed(2);
  }

  function addExpenseToDOM(name, amount) {
    const li = document.createElement("li");
    li.textContent = `${name}: Ksh ${amount.toFixed(2)}`;
    expenseList.appendChild(li);
  }

  loadSavedData(); 
});
