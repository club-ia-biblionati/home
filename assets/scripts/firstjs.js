var corps = document.getElementsByTagName("body")[0];
var date = new Date();
var anneeBalise = document.querySelector(".annee_courant");
anneeBalise.innerHTML = date.getFullYear();


// dynamisation du menu
var content  = document.querySelector(".content_click");
function ouvreMenus() {
    content.style.display="grid";
    content.setAttribute("id", "repons");
}
function fermeMenus() {
    content.style.display="none";
    content.removeAttribute("id");
}

