const createTransaction = async () => {
  //check if input filled
  transactionType = expenseType.checked
    ? expenseType.value
    : incomeType.checked
    ? incomeType.value
    : null;
  let id = JSON.parse(localStorage.userId);
  console.log(id);
  const transaction = {
    type: transactionType,
    amount: transactionAmount.value,
    date: transactionDate.value,
    notes: transactionNotes.value,
    userId: id,
  };

  console.log();
  const body = new FormData();
  body.append("type", transaction.type);
  body.append("amount", transaction.amount);
  body.append("date", transaction.date);
  body.append("notes", transaction.notes);
  body.append("id", transaction.userId);

  if (validityCheck()) {
    try {
      const response = await axios(
        "http://localhost/Expense-Tracker-Serverside/server-side/createTransaction.php",
        {
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          data: body,
        }
      );
    } catch (error) {
      console.log(error);
    }
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
