window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("SidenVises");

    document.querySelector("#burgermenu").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgermenu").innerHTML = "<img src = \"img_video/burger.svg\" alt=\"burger\">";
    } else {
        document.querySelector("#burgermenu").innerHTML = "<img src=\"img_video/kryds.svg\" alt = \"kryds\">";
    }
}
