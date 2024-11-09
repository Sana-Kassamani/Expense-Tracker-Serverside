let expenseH2 = document.getElementById("Expense-value");
let incomeH2 = document.getElementById("Income-value");
let budgetH2 = document.getElementById("Budget-value");

async function getTotal(type) {
  let userId = 5;
  const body = new FormData();
  body.append("id", userId);
  body.append("type", type);
  const response = await axios(
    "http://localhost/Expense-Tracker-Serverside/server-side/getTotal.php",
    {
      method: "post",
      data: body,
    }
  );

  let total = await response.data;
  console.log(total);
  return total;
}

document.addEventListener("DOMContentLoaded", async () => {
  let totalExpense = await getTotal("Expense");
  let totalIncome = await getTotal("Income");
  expenseH2.innerHTML = `${totalExpense.toFixed(2)} $`;
  incomeH2.innerHTML = `${totalIncome.toFixed(2)} $`;
  budgetH2.innerHTML = `${(totalExpense - totalIncome).toFixed(2)} $`;
});
