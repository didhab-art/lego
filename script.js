const figures = [
  { name: "Yoda", price: 150, type: "starwars" },
  { name: "Luke Skywalker", price: 120, type: "starwars" },
  { name: "Stormtrooper", price: 100, type: "starwars" },
  { name: "Ninja Kai", price: 80, type: "ninja" },
  { name: "Ninja Lloyd", price: 90, type: "ninja" }
];

function render(list = figures) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  list.forEach((f, i) => {
    setTimeout(() => {
      grid.innerHTML += `
        <div class="card">
          <img src="https://via.placeholder.com/300x200?text=LEGO">
          <h3>${f.name}</h3>
          <div class="price">${f.price} kr</div>
        </div>
      `;
    }, i * 80);
  });
}

function search() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const result = figures.filter(f =>
    f.name.toLowerCase().includes(value)
  );

  render(result);
}

function filter(type) {
  if (type === "all") render(figures);
  else render(figures.filter(f => f.type === type));
}

render();
