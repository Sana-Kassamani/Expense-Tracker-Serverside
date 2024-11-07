let editBtns = document.querySelectorAll("#edit");
let saveBTn = document.getElementById("save-changes");

const editTransacion = (id) => {
  const transaction = JSON.parse(localStorage.getItem(id));
  console.log(transaction);
  // ask if user is sure to delete
  showTransactionFields(transaction);
};

editBtns.forEach((element) => {
  element.addEventListener("click", () => {
    const id = element.getAttribute("transaction-id");
    editTransacion(id);
  });
});

function showTransactionFields(transaction) {
  expenseType.checked = transaction.type === expenseType.value ? true : false;
  incomeType.checked = transaction.type === incomeType.value ? true : false;
  transactionAmount.value = transaction.amount;
  transactionDate.value = transaction.date;
  transactionNotes.value = transaction.notes;
  saveBTn.addEventListener("click", () => {
    saveTransaction(transaction.id);
  });
  input.style.display = "flex";
  saveBTn.style.display = "block";
  Array.from(document.getElementsByTagName("button")).forEach(
    (b) => (b.disabled = true)
  );
  saveBTn.disabled = false;
  submitBtn.style.display = "none";
}

function saveTransaction(id) {
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
    saveBTn.style.display = "none";
    submitBtn.disabled = "false";
    window.location.reload();
  } else {
    errorMessage.style.display = "inline";
  }
}
