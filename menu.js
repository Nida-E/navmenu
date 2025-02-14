// JSON-data voor het menu
const menuData = [
    { "title": "Home", "url": "/" },
    { "title": "Producten", "url": "/producten/" },
    { "title": "Over ons", "url": "/overons/" },
    { "title": "Contact", "url": "/contact/" }
];

// Functie om het menu te genereren
function generateMenu() {
    const menuContainer = document.getElementById("menu");
    const ul = document.createElement("ul");

    // Itereer door de JSON-array en voeg <li> elementen toe
    menuData.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
    });

    menuContainer.appendChild(ul);
}

// Roep de functie aan om het menu te genereren
generateMenu();


// Toggle de display van het menu bij klik op hamburgerknop
document.querySelector(".hamburger").addEventListener("click", function() {
    this.classList.toggle("active");
    const menu = document.querySelector("ul");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
