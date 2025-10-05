function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

function enterApp() {
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("pdfPage").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const payBtn = document.getElementById("payBtn");
  if (payBtn) {
    payBtn.addEventListener("click", function () {
      document.getElementById("status").innerText = "Processing payment... Please wait.";
      this.disabled = true;

      setTimeout(() => {
        document.getElementById("status").innerText = "Payment successful ✅. PDF Unlocked.";
        document.getElementById("pdfControls").style.display = "block";
        this.style.display = "none";
      }, 2000);
    });
  }
});