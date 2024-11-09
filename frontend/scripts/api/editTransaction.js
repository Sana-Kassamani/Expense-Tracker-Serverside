const editTransaction = async (id) => {
  const response = await axios.post(
    `http://localhost/Expense-Tracker-Serverside/server-side/getTransaction.php?id=${id}`
  );
  const transaction = response.data;
  console.log(transaction);
  // ask if user is sure to delete
  showTransactionFields(transaction);
};

function showTransactionFields(transaction) {
  let saveBTn = document.getElementById("save-changes");
  expenseType.checked = transaction.type === expenseType.value ? true : false;
  incomeType.checked = transaction.type === incomeType.value ? true : false;
  transactionAmount.value = transaction.amount;
  transactionDate.value = transaction.date;
  transactionNotes.value = transaction.notes;
  console.log(saveBTn);
  saveBTn.addEventListener("click", async () => {
    console.log("hello");
    await saveTransaction(transaction.id);
  });
  input.style.display = "flex";
  saveBTn.style.display = "block";
  Array.from(document.getElementsByTagName("button")).forEach(
    (b) => (b.disabled = true)
  );
  saveBTn.disabled = false;
  submitBtn.style.display = "none";
}

async function saveTransaction(id) {
  let saveBTn = document.getElementById("save-changes");
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
    const body = new FormData();
    body.append("type", transaction.type);
    body.append("amount", transaction.amount);
    body.append("date", transaction.date);
    body.append("notes", transaction.notes);

    if (validityCheck()) {
      try {
        const response = await axios(
          "http://localhost/Expense-Tracker-Serverside/server-side/editTransaction.php",
          {
            method: "post",
            headers: { "Content-Type": "multipart/form-data" },
            data: body,
          }
        );
      } catch (error) {
        console.log(error);
      }
      saveBTn.style.display = "none";
      submitBtn.disabled = "false";
      window.location.reload();
    } else {
      errorMessage.style.display = "inline";
    }
  }
}

const listenOnEdits = function () {
  const edit_btns = document.getElementsByClassName("edit-btn");

  // return html collection filled with buttons
  console.log(edit_btns);
  const array = Array.from(edit_btns);
  console.log(array.length); //return zero
  //BUG ALERT:
  // the problem is edit btns are created dynamically and whenthis function runs they are not yet created so array.length=0
  // but html collection updates dynamically thats why it shows content but doesnt add the event listener
  for (let i = 0; i < edit_btns.length; i++) {
    console.log(edit_btns[i]);
    edit_btns[i].addEventListener("click", () => {
      console.log("hiiiiii");
    });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("Edit file");
  await listenOnEdits();
});

// Array.from().forEach((element) => {
//   console.log(element);
//   element.addEventListener("click", async () => {
//     const id = element.getAttribute("transaction-id");
//     await editTransacion(id);
//   });
// });

// btn.addEventListener("click", async () => {
//   const id = btn.getAttribute("transaction-id");
//   await editTransaction(id);
// });
