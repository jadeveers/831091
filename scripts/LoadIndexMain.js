document.addEventListener("DOMContentLoaded", () => {
  fetch("templates/indexMain.html") // Path to your nav file
    .then(response => response.text())
    .then(data => {
      document.getElementById("index-main").innerHTML = data;
    })
    .catch(err => console.error("Error loading nav:", err));
});
