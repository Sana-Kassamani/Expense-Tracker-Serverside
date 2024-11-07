if (!localStorage.getItem("ID")) {
  localStorage.setItem("ID", 0);
}

const getAllTransactions = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != "ID") {
      const transaction = JSON.parse(localStorage.getItem(key));
      displayTransaction(transaction);
    }
  }
};
getAllTransactions();
