function getExpenses() {
  let totalExpenses = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != "ID") {
      const transaction = JSON.parse(localStorage.getItem(key));
      if (transaction.type === "Expense")
        totalExpenses += parseFloat(transaction.amount);
    }
  }
  return totalExpenses.toFixed(2);
}
function getIncomes() {
  let totalIncomes = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != "ID") {
      const transaction = JSON.parse(localStorage.getItem(key));
      if (transaction.type === "Income")
        totalIncomes += parseFloat(transaction.amount);
    }
  }
  return totalIncomes.toFixed(2);
}

let expenseH2 = document.getElementById("Expense-value");
let incomeH2 = document.getElementById("Income-value");
let budgetH2 = document.getElementById("Budget-value");

// expenseH2.innerHTML = `${getExpenses()} $`;
// incomeH2.innerHTML = `${getIncomes()} $`;
// budgetH2.innerHTML = `${(getIncomes() - getExpenses()).toFixed(2)} $`;
