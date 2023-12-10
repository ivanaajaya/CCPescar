// Crear el encabezado del menú
const header = document.createElement("header");
const logoContainer = document.createElement("div");
logoContainer.id = "logo-container";
const logo1 = document.createElement("div");
logo1.id = "logo1";
const logoLink = document.createElement("a");
logoLink.href = "/";
const logoImage = document.createElement("img");
logoImage.src = "imagenes/logo1.png";
logoImage.alt = "Logo 1";
logoLink.appendChild(logoImage);
logo1.appendChild(logoLink);
logoContainer.appendChild(logo1);
header.appendChild(logoContainer);

// Crear el menú
const menuDiv = document.createElement("div");
const mainNav = document.createElement("nav");
mainNav.id = "mainav";
mainNav.className = "hoc clear";
const menuUl = document.createElement("ul");
menuUl.className = "clear";

// Agregar elementos del menú
const menuItems = [
    { text: "UNSA", subItems: ["EXACTAS", "INGENIERIA", "ECONOMICAS","NATURALES","SALUD", "HUMANIDADES"] },
    { text: "UCASAL", subItems: ["INGENIERIA", "ECONOMIAS Y ADMINISTRACION", "ARTES Y CIENCIAS", "CIENCIAS AGRARIAS Y VETERINARIAS", "EDUCACION"] },
    { text: "CURSOS Y CARRERAS GRATUITAS", link: "/cursos",subItems: [] },
    { text: "PROFESORES PARTICULARES", link: "/profesores", subItems: [] }, // Agregamos la propiedad "link"
    { text: "OFERTAS LABORALES", link: "/plantill_OfertasLaborales", subItems: [] }
];

menuItems.forEach(menuItem => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "drop";
    a.href = menuItem.link || "#"; // Usar el enlace proporcionado, o "#" si no hay enlace definido
    a.textContent = menuItem.text;

    if (menuItem.subItems.length > 0) {
        const subUl = document.createElement("ul");
        menuItem.subItems.forEach(subItemText => {
            const subLi = document.createElement("li");
            const subA = document.createElement("a");
            subA.href = `/carreras`;
            subA.textContent = subItemText;
            subLi.appendChild(subA);
            subUl.appendChild(subLi);
        });
        li.appendChild(a);
        li.appendChild(subUl);
    } else {
        li.appendChild(a);
    }

    menuUl.appendChild(li);
});

mainNav.appendChild(menuUl);
menuDiv.appendChild(mainNav);

// Agregar el menú al contenedor
document.querySelector("body").appendChild(header);
document.querySelector("body").appendChild(menuDiv);
