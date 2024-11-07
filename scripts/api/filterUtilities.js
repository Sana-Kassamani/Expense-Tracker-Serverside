function typeIncome(type) {
  return type === "Income";
}

function typeExpense(type) {
  return type === "Expense";
}
function checkBelowMaxAmount(amount) {
  try {
    return parseFloat(amount) <= parseFloat(maxAmount.value);
  } catch {
    console.log("Error parsing max amount");
  }
}

function checkAboveMinAmount(amount) {
  try {
    return parseFloat(amount) >= parseFloat(minAmount.value);
  } catch {
    console.log("Error parsing min amount");
  }
}

function checkBeforeDate(date) {
  const transactionDate = new Date(date);
  const selectedDate = new Date(beforeDate.value);
  return transactionDate < selectedDate;
}
function checkAfterDate(date) {
  const transactionDate = new Date(date);
  const selectedDate = new Date(afterDate.value);
  return transactionDate > selectedDate;
}

function checkSearchWord(notes) {
  return notes.toLowerCase().includes(searchWord.value.toLowerCase());
}
