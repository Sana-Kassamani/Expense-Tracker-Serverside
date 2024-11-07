const createTransaction = () => {
  let id = Number.parseInt(localStorage.getItem("ID"));
  if (Number.isInteger(id)) {
    //check if input filled
    transactionType = expenseType.checked
      ? expenseType.value
      : incomeType.checked
      ? incomeType.value
      : null;
    const transaction = {
      id: id,
      type: transactionType,
      amount: transactionAmount.value,
      date: transactionDate.value,
      notes: transactionNotes.value,
    };

    if (validityCheck()) {
      localStorage.setItem(`${id}`, JSON.stringify(transaction));
      id += 1;
      localStorage.setItem("ID", id);

      window.location.reload();
    } else {
      errorMessage.style.display = "inline";
    }
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
