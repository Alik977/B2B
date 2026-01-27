document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([40.22727243656217, 44.472775107071406], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  }).addTo(map);

  L.marker([40.22744327298755, 44.47278672260408])
    .addTo(map)
    .bindPopup("Մեր գտնվելու վայրը")
    .openPopup();
});
