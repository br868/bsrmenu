

// Crear el menú dinámicamente
function renderizarMenu(data) {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = ""; // Limpiar el menú existente

    data.forEach(item => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = item.texto;
        link.href = item.enlace;
        li.appendChild(link);
        menuList.appendChild(li);
    });
}

// Alternar el menú para pantallas pequeñas
function pestMenupeqno(){
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}
  
// Cargar el menú cuando la página esté lista
document.addEventListener("DOMContentLoaded", () => {
    renderizarMenu(menu); // Usa los datos del JSON

});

