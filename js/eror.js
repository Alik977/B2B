const offlineOverlay = document.getElementById("offlineOverlay");

function triggerOfflineEffect() {
  document.body.classList.add("glitch");

  setTimeout(() => {
    offlineOverlay.classList.add("active");
  }, 400);
}

function removeOfflineEffect() {
  offlineOverlay.classList.remove("active");
  document.body.classList.remove("glitch");
}

window.addEventListener("offline", triggerOfflineEffect);
window.addEventListener("online", removeOfflineEffect);

if (!navigator.onLine) {
  triggerOfflineEffect();
}
