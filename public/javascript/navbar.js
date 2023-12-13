document.addEventListener("DOMContentLoaded", function () {
    // Elementos del menú
    const menuItems = [
        { text: "UNSA", subItems: ["EXACTAS", "INGENIERIA", "ECONOMICAS", "NATURALES", "SALUD", "HUMANIDADES"] },
        { text: "UCASAL", subItems: ["INGENIERIA", "ECONOMIAS Y ADMINISTRACION", "ARTES Y CIENCIAS", "CIENCIAS AGRARIAS Y VETERINARIAS", "EDUCACION"] },
        { text: "CURSOS Y CARRERAS GRATUITAS", link: "/cursos", subItems: [] },
        { text: "PROFESORES PARTICULARES", link: "/profesores", subItems: [] },
        { text: "OFERTAS LABORALES", link: "/plantill_OfertasLaborales", subItems: [] }
    ];

    // Crear el menú dinámicamente
    const menuUl = document.querySelector("#mainav ul.clear");
    menuItems.forEach(menuItem => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "drop";
        a.href = menuItem.link || "#";
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
});
