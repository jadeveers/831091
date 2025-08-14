document.addEventListener("DOMContentLoaded", () => {
  fetch("/templates/footer.html") // Path to your nav file
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Error loading nav:", err));
});
