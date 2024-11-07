let deleteBtns = document.querySelectorAll("#delete");

const deleteTransacion = (id) => {
  const transaction = JSON.parse(localStorage.getItem(id));
  console.log(transaction);
  // ask if user is sure to delete
  localStorage.removeItem(id);
  window.location.reload();
};

deleteBtns.forEach((element) => {
  element.addEventListener("click", () => {
    const id = element.getAttribute("transaction-id");
    deleteTransacion(id);
  });
});
