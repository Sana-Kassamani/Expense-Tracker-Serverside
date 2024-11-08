let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let table = document.getElementById("transactions");
let expenseType = document.getElementById("ExpenseType");
let incomeType = document.getElementById("IncomeType");
let transactionType = expenseType.checked
  ? expenseType.value
  : incomeType.checked
  ? incomeType.value
  : null;
let transactionAmount = document.getElementById("amount");
let transactionDate = document.getElementById("date");
let transactionNotes = document.getElementById("notes");
let income = document.getElementById("IncomeFilter");
let expense = document.getElementById("ExpenseFilter");
let maxAmount = document.getElementById("max");
let minAmount = document.getElementById("min");
let beforeDate = document.getElementById("beforeDate");
let afterDate = document.getElementById("afterDate");
let searchWord = document.getElementById("search");

let errorMessage = document.getElementById("error");

function addDeleteBtn(parent, id) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "delete-btn flex align-center justify-center");
  btn.setAttribute("id", "delete");
  btn.setAttribute("transaction-id", `${id}`);
  btn.innerHTML = `<div class="div-img"><img src="./assets/trash.png"  /></div>`;
  parent.appendChild(btn);
}
function addEditBtn(parent, id) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "edit-btn flex align-center justify-center");
  btn.setAttribute("id", "edit");
  btn.setAttribute("transaction-id", `${id}`);
  btn.innerHTML = `<div class="div-img"><img src="./assets/pencil.png"  /></div>`;
  parent.appendChild(btn);
}

const displayTransaction = (transaction) => {
  let row = document.createElement("tr");
  let type = document.createElement("td");
  let amount = document.createElement("td");
  let date = document.createElement("td");
  let notes = document.createElement("td");
  type.innerHTML = transaction.type;
  amount.innerHTML = transaction.amount;
  date.innerHTML = transaction.date;
  notes.innerHTML = transaction.notes;
  row.appendChild(type);
  row.appendChild(amount);
  row.appendChild(date);
  row.appendChild(notes);
  addDeleteBtn(row, transaction.id);
  addEditBtn(row, transaction.id);
  table.appendChild(row);
};

function reset() {
  expense.checked = false;
  income.checked = false;
  maxAmount.value =
    minAmount.value =
    beforeDate.value =
    afterDate.value =
    searchWord.value =
      "";
}

let addBtn = document.getElementById("addBtn");
let input = document.getElementById("input-fields");
addBtn.addEventListener("click", () => {
  input.style.display = "flex";
  Array.from(document.getElementsByTagName("button")).forEach(
    (b) => (b.disabled = true)
  );
  submitBtn.disabled = false;
});
