var conteneur = document.querySelector('.conteneur');
var numexo = 1;
function exerciceCorrige(enonce="null", resultat = "null", auteur = "null") {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var span = document.createElement('span');
    span.innerHTML = "Exercice " + numexo;
    numexo = numexo + 1;
    div2.appendChild(span);
    var retour = document.createElement('br');
    div2.appendChild(retour);
    var div21 = document.createElement('div');
    div21.setAttribute('class', "enonce");
    div21.innerHTML = enonce;
    div2.appendChild(div21);
    div1.appendChild(div2);
    var pre =document.createElement('pre');
    pre.innerHTML = "Correction <br><hr><br>" +  resultat;
    div1.appendChild(pre);
    var div3 = document.createElement('div');
    div3.setAttribute('class', "prediv");
    var span1 = document.createElement('span');
    span1.innerHTML = "Code Proposé par : " + auteur;
    div3.appendChild(span1);
    var span2 = document.createElement('span');
    var bold = document.createElement('b');
    bold.innerHTML = "Copier";
    span2.appendChild(bold);
    div3.appendChild(span2);
    div1.appendChild(div3);
    conteneur.appendChild(div1);
}

var ras = document.querySelector('.ras');

for (let i = 0; i < donnees.length; i++) {
    if (donnees.length > 0) {
        ras.style.display = "none";
        const element = donnees[i];
        exerciceCorrige(element[0], element[1], element[2]);
    }
}

var btnCopie = document.getElementsByTagName('b');
var recupPre = document.getElementsByTagName('pre');
for (let i = 0; i < btnCopie.length; i++) {
    const element = btnCopie[i];
    element.addEventListener('click', ()=>{
        navigator.clipboard.writeText(recupPre[i].textContent);
        element.innerHTML = "copié";
    })
}