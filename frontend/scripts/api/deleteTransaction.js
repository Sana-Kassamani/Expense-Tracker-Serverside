// let deleteBtns = document.getElementsByClassName("delete-btn");

const deleteTransaction = async (id) => {
  const body = new FormData();
  body.append("id", id);
  try {
    const response = await axios(
      "http://localhost/Expense-Tracker-Serverside/server-side/deleteTransaction.php",
      {
        method: "post",
        data: body,
      }
    );
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
  showContent();
};

// console.log(deleteBtns);
// for (let i = 0; i < deleteBtns.length; i++) {
//   console.log(deleteBtns[i]);
//   deleteBtns[i].addEventListener("click", () => {
//     console.log("hiiiiii");
//   });
// }

// Array.from(deleteBtns).forEach((element) => {
//   element.addEventListener("click", async () => {
//     console.log("Delete pressed");
//     const id = element.getAttribute("transaction-id");
//     await deleteTransaction(id);
//   });
// });
