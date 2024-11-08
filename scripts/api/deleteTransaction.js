let deleteBtns = document.querySelectorAll("#delete");

const deleteTransacion = async (id) => {
  try {
    await fetch(
      `http://localhost/Expense-Tracker-Serverside/server-side/deleteTransaction.php?id=${id}`
    );
  } catch (error) {
    console.log(error);
  }
  console.log("deleted");
  window.location.reload();
};

deleteBtns.forEach((element) => {
  element.addEventListener("click", async () => {
    console.log("Delete pressed");
    const id = element.getAttribute("transaction-id");
    const transaction_id = parseInt(id);
    await deleteTransacion(transaction_id);
  });
});
