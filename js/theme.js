(function () {
  var root = document.documentElement;
  var saved = null;

  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    saved = null;
  }

  // Light is the default; only switch to dark if the visitor chose it before.
  root.setAttribute("data-theme", saved === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }

    function updateLabel() {
      var isDark = root.getAttribute("data-theme") === "dark";
      button.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
    }

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // Saving is optional; the toggle still works for this visit.
      }
      updateLabel();
    });

    updateLabel();
  });
})();
