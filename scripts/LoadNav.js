document.addEventListener("DOMContentLoaded", () => {
  fetch("/templates/nav.html") // Path to your nav file
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Error loading nav:", err));
});
