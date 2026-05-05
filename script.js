function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

const figures = [
  { name: "Yoda", value: "150 kr" },
  { name: "Luke Skywalker", value: "120 kr" },
  { name: "Chewbacca", value: "100 kr" },
  { name: "Ninja (Grønn)", value: "50 kr" },
  { name: "Leprechaun", value: "200 kr" }
];

function searchFigure() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const results = figures.filter(f => f.name.toLowerCase().includes(input));

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>Ingen funnet 😢</p>";
    return;
  }

  results.forEach(f => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>${f.name}</strong> – Verdi: ${f.value}</p>`;
    resultsDiv.appendChild(div);
  });
}
