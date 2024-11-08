const body = {};

const getAllTransactions = async () => {
  const response = await axios(
    "http://localhost/Expense-Tracker-Serverside/server-side/getTransactions.php"
  );

  const transactionsArray = response.data;
  for (let i = 0; i < transactionsArray.length; i++) {
    console.log(transactionsArray[i]);
    displayTransaction(transactionsArray[i]);
  }
};
document.addEventListener("DOMContentLoaded", async () => {
  await getAllTransactions();
});
