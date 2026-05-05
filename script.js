const figures = [
  {
    id: 1,
    name: "Yoda",
    value: 150,
    img: "https://via.placeholder.com/200x200?text=Yoda"
  },
  {
    id: 2,
    name: "Luke Skywalker",
    value: 120,
    img: "https://via.placeholder.com/200x200?text=Luke"
  },
  {
    id: 3,
    name: "Chewbacca",
    value: 100,
    img: "https://via.placeholder.com/200x200?text=Chewbacca"
  },
  {
    id: 4,
    name: "Ninja",
    value: 50,
    img: "https://via.placeholder.com/200x200?text=Ninja"
  }
];

let currentId = null;

function render() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search").value.toLowerCase();

  grid.innerHTML = "";

  figures
    .filter(f => f.name.toLowerCase().includes(search))
    .forEach(f => {

      const favs = JSON.parse(localStorage.getItem("favs") || "[]");
      const isFav = favs.includes(f.id);

      grid.innerHTML += `
        <div class="card" onclick="openModal(${f.id})">
          <img src="${f.img}">
          <h3>${f.name}</h3>
          <div class="badge">${f.value} kr</div>
          ${isFav ? "⭐" : ""}
        </div>
      `;
    });
}

function openModal(id) {
  const f = figures.find(x => x.id === id);
  currentId = id;

  document.getElementById("modalImg").src = f.img;
  document.getElementById("modalName").innerText = f.name;
  document.getElementById("modalValue").innerText = f.value + " kr";

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function toggleFavorite(id) {
  let favs = JSON.parse(localStorage.getItem("favs") || "[]");

  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }

  localStorage.setItem("favs", JSON.stringify(favs));
  render();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

render();
