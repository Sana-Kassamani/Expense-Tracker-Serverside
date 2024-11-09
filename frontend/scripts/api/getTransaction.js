const getAllTransactions = async () => {
  let id = JSON.parse(localStorage.userId);
  const response = await axios.get(
    `http://localhost/Expense-Tracker-Serverside/server-side/getTransactions.php?id=${id}`
  );

  const transactionsArray = response.data;
  for (let i = 0; i < transactionsArray.length; i++) {
    displayTransaction(transactionsArray[i]);
  }
};
document.addEventListener("DOMContentLoaded", async () => {
  await getAllTransactions();
});
