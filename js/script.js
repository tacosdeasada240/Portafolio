const textos = {
    es: {
        inicio: "Inicio",
        sobre_mi: "Sobre mí",
        proyectos: "Proyectos",
        habilidades: "Habilidades",
        contacto: "Contacto",
        etiqueta: "Estudiante de Redes",
        resumen: "Diseño y simulo infraestructuras de red con VLANs, direccionamiento IP, IoT y VoIP.",
        ver_proyectos: "Ver proyectos",
        descargar_cv: "Descargar CV",
        sobre_mi_texto: "Soy estudiante de cuarto semestre de Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Sinaloa. Espero egresar en 2028. Me gusta explorar cómo funciona el hardware y sus especificaciones, y en mi tiempo libre aprendo alemán por mi cuenta y juego videojuegos.",
        idiomas: "Idiomas",
        idioma_es: "Español",
        idioma_en: "Inglés",
        idioma_de: "Alemán",
        infra_titulo: "Infraestructura de red de un edificio de la UPSIN",
        infra_texto1: "Recreación de la infraestructura de red de un edificio de la UPSIN en Cisco Packet Tracer. La topología es en estrella y conecta switches, routers y servidores de DHCP, DNS, correo y HTTP, además de dispositivos IoT como cámaras web y un monitor de temperatura.",
        infra_texto2: "El direccionamiento parte de la red 172.16.0.0 y se divide en diez VLAN con subredes de distinto tamaño, de /22 a /28.",
        ver_github: "Ver en GitHub",
        libreria_texto: "Prototipo de tienda en línea de libros hecho solo con HTML y CSS. Incluye una página de inicio con categorías y un catálogo con tarjetas de producto.",
        tabla_titulo: "Tabla periódica",
        tabla_texto: "Prototipo de diseño visual con los 118 elementos organizados por periodos y grupos, con un color distinto para cada familia química.",
        redes: "Redes",
        desarrollo_web: "Desarrollo web",
        herramientas: "Herramientas",
        habilidades_blandas: "Habilidades blandas",
        h_direccionamiento: "Direccionamiento IP y subredes",
        h_vlans: "Configuración de VLANs",
        h_servicios: "Servicios de red (DHCP, DNS, correo y HTTP)",
        h_iot: "Dispositivos IoT y VoIP",
        h_simulacion: "Simulación con Cisco Packet Tracer",
        h_git: "Git y GitHub",
        s_problemas: "Resolución de problemas",
        s_autodidacta: "Aprendizaje autodidacta",
        s_equipo: "Trabajo en equipo",
        contacto_texto: "¿Quieres conversar sobre redes o proyectos? Escríbeme.",
        enviar_correo: "Enviar correo",
        tema_claro: "Claro",
        tema_oscuro: "Oscuro"
    },
    en: {
        inicio: "Home",
        sobre_mi: "About me",
        proyectos: "Projects",
        habilidades: "Skills",
        contacto: "Contact",
        etiqueta: "Networking student",
        resumen: "I design and simulate network infrastructures with VLANs, IP addressing, IoT and VoIP.",
        ver_proyectos: "View projects",
        descargar_cv: "Download CV",
        sobre_mi_texto: "I am a fourth-semester student of Information Technology and Digital Innovation at the Universidad Politécnica de Sinaloa. I expect to graduate in 2028. I enjoy exploring how hardware works and its specifications, and in my free time I teach myself German and play video games.",
        idiomas: "Languages",
        idioma_es: "Spanish",
        idioma_en: "English",
        idioma_de: "German",
        infra_titulo: "Network infrastructure of a UPSIN building",
        infra_texto1: "Recreation of the network infrastructure of a UPSIN building in Cisco Packet Tracer. The topology is a star that connects switches, routers and DHCP, DNS, email and HTTP servers, as well as IoT devices such as webcams and a temperature monitor.",
        infra_texto2: "The addressing starts from the 172.16.0.0 network and is divided into ten VLANs with subnets of different sizes, from /22 to /28.",
        ver_github: "View on GitHub",
        libreria_texto: "Prototype of an online bookstore built with only HTML and CSS. It includes a home page with categories and a catalog with product cards.",
        tabla_titulo: "Periodic table",
        tabla_texto: "Visual design prototype with all 118 elements organized by periods and groups, with a different color for each chemical family.",
        redes: "Networking",
        desarrollo_web: "Web development",
        herramientas: "Tools",
        habilidades_blandas: "Soft skills",
        h_direccionamiento: "IP addressing and subnetting",
        h_vlans: "VLAN configuration",
        h_servicios: "Network services (DHCP, DNS, email and HTTP)",
        h_iot: "IoT and VoIP devices",
        h_simulacion: "Simulation with Cisco Packet Tracer",
        h_git: "Git and GitHub",
        s_problemas: "Problem solving",
        s_autodidacta: "Self-taught learning",
        s_equipo: "Teamwork",
        contacto_texto: "Want to talk about networking or projects? Write to me.",
        enviar_correo: "Send email",
        tema_claro: "Light",
        tema_oscuro: "Dark"
    },
    de: {
        inicio: "Start",
        sobre_mi: "Über mich",
        proyectos: "Projekte",
        habilidades: "Fähigkeiten",
        contacto: "Kontakt",
        etiqueta: "Schwerpunkt Netzwerke",
        resumen: "Ich entwerfe und simuliere Netzwerkinfrastrukturen mit VLANs, IP-Adressierung, IoT und VoIP.",
        ver_proyectos: "Projekte ansehen",
        descargar_cv: "Lebenslauf herunterladen",
        sobre_mi_texto: "Ich studiere im vierten Semester Informationstechnologie und digitale Innovation an der Universidad Politécnica de Sinaloa. Meinen Abschluss mache ich voraussichtlich 2028. Ich erkunde gern, wie Hardware funktioniert und welche Spezifikationen sie hat. In meiner Freizeit lerne ich selbstständig Deutsch und spiele Videospiele.",
        idiomas: "Sprachen",
        idioma_es: "Spanisch",
        idioma_en: "Englisch",
        idioma_de: "Deutsch",
        infra_titulo: "Netzwerkinfrastruktur eines UPSIN-Gebäudes",
        infra_texto1: "Nachbildung der Netzwerkinfrastruktur eines UPSIN-Gebäudes in Cisco Packet Tracer. Die Topologie ist sternförmig und verbindet Switches, Router und Server für DHCP, DNS, E-Mail und HTTP sowie IoT-Geräte wie Webcams und einen Temperaturmonitor.",
        infra_texto2: "Die Adressierung geht vom Netz 172.16.0.0 aus und ist in zehn VLANs mit Subnetzen unterschiedlicher Größe unterteilt, von /22 bis /28.",
        ver_github: "Auf GitHub ansehen",
        libreria_texto: "Prototyp eines Online-Buchladens, der nur mit HTML und CSS erstellt wurde. Er enthält eine Startseite mit Kategorien und einen Katalog mit Produktkarten.",
        tabla_titulo: "Periodensystem",
        tabla_texto: "Visueller Designprototyp mit allen 118 Elementen, geordnet nach Perioden und Gruppen, mit einer eigenen Farbe für jede chemische Familie.",
        redes: "Netzwerke",
        desarrollo_web: "Webentwicklung",
        herramientas: "Werkzeuge",
        habilidades_blandas: "Soft Skills",
        h_direccionamiento: "IP-Adressierung und Subnetting",
        h_vlans: "VLAN-Konfiguration",
        h_servicios: "Netzwerkdienste (DHCP, DNS, E-Mail und HTTP)",
        h_iot: "IoT- und VoIP-Geräte",
        h_simulacion: "Simulation mit Cisco Packet Tracer",
        h_git: "Git und GitHub",
        s_problemas: "Problemlösung",
        s_autodidacta: "Selbstständiges Lernen",
        s_equipo: "Teamarbeit",
        contacto_texto: "Möchtest du dich über Netzwerke oder Projekte austauschen? Schreib mir.",
        enviar_correo: "E-Mail senden",
        tema_claro: "Hell",
        tema_oscuro: "Dunkel"
    }
};

const botonTema = document.querySelector("#boton-tema");
const botonesIdioma = document.querySelectorAll(".boton-idioma");

let idiomaActual = "es";

function actualizarBotonTema() {
    if (document.body.classList.contains("claro")) {
        botonTema.textContent = textos[idiomaActual].tema_oscuro;
    } else {
        botonTema.textContent = textos[idiomaActual].tema_claro;
    }
}

function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    document.documentElement.lang = idioma;

    const elementos = document.querySelectorAll("[data-texto]");
    elementos.forEach(function (elemento) {
        elemento.textContent = textos[idioma][elemento.dataset.texto];
    });

    botonesIdioma.forEach(function (boton) {
        boton.classList.toggle("activo", boton.dataset.idioma === idioma);
    });

    actualizarBotonTema();
}

botonesIdioma.forEach(function (boton) {
    boton.addEventListener("click", function () {
        cambiarIdioma(boton.dataset.idioma);
    });
});

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("claro");
    actualizarBotonTema();
});