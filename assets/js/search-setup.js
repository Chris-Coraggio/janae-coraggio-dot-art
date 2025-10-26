// Wait for DOM to be ready and theme to be available
document.addEventListener("DOMContentLoaded", function () {
  const ninjaKeys = document.querySelector("ninja-keys");

  if (ninjaKeys) {
    // Set theme if determineComputedTheme is available
    if (typeof determineComputedTheme === "function") {
      let searchTheme = determineComputedTheme();
      if (searchTheme === "dark") {
        ninjaKeys.classList.add("dark");
      } else {
        ninjaKeys.classList.remove("dark");
      }
    }
  }
});

// Make openSearchModal globally available
window.openSearchModal = () => {
  console.log("openSearchModal called"); // Debug log

  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) {
    console.error("Search modal not found");
    return;
  }

  console.log("Found ninja-keys element:", ninjaKeys); // Debug log

  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav && $navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }

  ninjaKeys.open();
  console.log("Search modal opened"); // Debug log
};
