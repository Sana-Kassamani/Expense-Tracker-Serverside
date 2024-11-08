const createTransaction = async () => {
  //check if input filled
  transactionType = expenseType.checked
    ? expenseType.value
    : incomeType.checked
    ? incomeType.value
    : null;
  const transaction = {
    type: transactionType,
    amount: transactionAmount.value,
    date: transactionDate.value,
    notes: transactionNotes.value,
  };

  if (validityCheck()) {
    const response = await fetch(
      "http://localhost/Expense-Tracker-Serverside/server-side/createTransaction.php",
      {
        method: "POST",
        body: JSON.stringify(transaction),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    window.location.reload();
  } else {
    errorMessage.style.display = "inline";
  }
};

submitBtn.addEventListener("click", createTransaction);

function validityCheck() {
  if (
    transactionType &&
    transactionAmount.value &&
    transactionDate.value &&
    transactionNotes.value
  )
    return true;
}
