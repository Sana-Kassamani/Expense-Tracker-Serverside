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

  console.log(transaction);
  if (validityCheck()) {
    try {
      const response = await fetch(
        `http://localhost/Expense-Tracker-Serverside/server-side/createTransaction.php?type=${transaction.type}&amount=${transaction.amount}&date=${transaction.date}&notes=${transaction.notes}`
      );
    } catch (error) {
      console.log(error);
    }
    // {
    //   method: "POST",
    //   body: JSON.stringify(transaction),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // }
  } else {
    errorMessage.style.display = "inline";
  }
  window.location.reload();
};

submitBtn.addEventListener("click", async () => {
  await createTransaction();
});

function validityCheck() {
  if (
    transactionType &&
    transactionAmount.value &&
    transactionDate.value &&
    transactionNotes.value
  )
    return true;
}
