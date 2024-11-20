const dateElement = document.getElementById("date");
const today = new Date().toLocaleDateString();
dateElement.textContent = today;
