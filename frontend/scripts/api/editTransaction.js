const listenOnEdits = function () {
  const edit_btns = document.getElementsByClassName("edit-btn");

  console.log(edit_btns);
  for (let i = 0; i < edit_btns.length; i++) {
    console.log(edit_btns[i]);
    edit_btns[i].addEventListener("click", () => {
      console.log("hiiiiii");
    });
  }
  // Array.from().forEach((element) => {
  //   console.log(element);
  //   element.addEventListener("click", async () => {
  //     const id = element.getAttribute("transaction-id");
  //     await editTransacion(id);
  //   });
  // });
};

listenOnEdits();
// btn.addEventListener("click", async () => {
//   const id = btn.getAttribute("transaction-id");
//   await editTransaction(id);
// });
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
      showContent();
    } else {
      errorMessage.style.display = "inline";
    }
  }
}
