const indexToAttribute = {
  type: 0,
  amount: 1,
  date: 2,
  notes: 3,
};

function filterByType() {
  if (income.checked) {
    filterTable(indexToAttribute["type"], typeIncome);
  } else if (expense.checked) {
    filterTable(indexToAttribute["type"], typeExpense);
  }
}

function showAllTable() {
  let tr = table.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    tr[i].style.display = "table-row";
  }
}

function filterTable(index, filter) {
  let tr = table.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    let rowData = tr[i].getElementsByTagName("td");
    if (
      !filter(rowData[index].innerHTML) ||
      !filter(rowData[index].innerText)
    ) {
      tr[i].style.display = "none";
    }
  }
}

let filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
  showAllTable();
  (expense.checked || income.checked) && filterByType();
  maxAmount.value &&
    filterTable(indexToAttribute["amount"], checkBelowMaxAmount);
  minAmount.value &&
    filterTable(indexToAttribute["amount"], checkAboveMinAmount);
  beforeDate.value && filterTable(indexToAttribute["date"], checkBeforeDate);
  afterDate.value && filterTable(indexToAttribute["date"], checkAfterDate);
  searchWord.value && filterTable(indexToAttribute["notes"], checkSearchWord);
});

resetBtn.addEventListener("click", () => {
  showAllTable();
  reset();
});
