// Search button click handler - no keyboard shortcut visual needed
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      // Just show the search icon without keyboard shortcut
      shortcutKeyElement.innerHTML = 'Search <i class="ti ti-search"></i>';
    }
  }
});
