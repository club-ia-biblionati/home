var conteneur = document.querySelectorAll('.range_un');

// notre calendrier
var date = new Date();

function mcourant(){
    var mc = date.getMonth();
    switch (mc) {
        case 0:
            return "Janvier";
            break;
        case 1:
            return "Février";
            break;
        case 2:
            return "Mars";
            break;
        case 3:
            return "Avril";
            break;
        case 4:
            return "Mai";
            break;
        case 5:
            return "Juin";
            break;
        case 6:
            return "Juillet";
            break;
        case 7:
            return "Août";
            break;
        case 8:
            return "Septembre";
            break;
        case 9:
            return "Octobre";
            break;
        case 10:
            return "Novembre";
            break;
        case 11:
            return "Décembre";
            break;
        default:
            return "Erreur";
            break;
    }
}

var jcourant = date.getDate();
var acourant = date.getFullYear();

function anneeBissextile(a){
    if(a%100 == 0){
        if (a%400 == 0) {
            var x=1;
        }
        else{
            var x=0;
        }
    }
    else{
        if (a%4 == 0) {
            var x=1;
        }
        else{
            var x=0;
        }
    }
    return x;
}
// fin de la fonction bissextile

// #fonction pour renvoyer le nom du mois, le nombre de jours
function moisDeAnnee(a) {
    switch (a) {
        case 1:
            return ["Janvier", 31, 0, 1];
            break;
        case 2:
            return ["Février", 28,29,2];
            break;
        case 3:
            return ["Mars", 31, 0, 3];
            break;
        case 4:
            return ["Avril", 30, 0, 4];
            break;
        case 5:
            return ["Mai", 31, 0, 5];
            break;
        case 6:
            return ["Juin", 30, 0, 6];
            break;
        case 7:
            return ["Juillet", 31, 0, 7];
            break;
        case 8:
            return ["Août", 31, 0, 8];
            break;
        case 9:
            return ["Septembre", 30, 0, 9];
            break;
        case 10:
            return ["Octobre", 31, 0, 10];
            break;
        case 11:
            return ["Novembre", 30, 0, 11];
            break;
        case 12:
            return ["Décembre", 31, 0 ,12]
            break;
        default:
            return "erreur";
            break;
    }
}
//la fonctin suivante est la fonction qui va nous envoyer toutes les informations sur un mois donné. ça va envoyer le nom du moi, les jours de façon précise et le jour du début du mois suivant.
function construitMois(pj, mois, annee) {
    var nom=moisDeAnnee(mois)[0];
    if(anneeBissextile(annee)==1){
        if(mois==2){
            var n=moisDeAnnee(mois)[2];
        }
        else{
            var n=moisDeAnnee(mois)[1];
        }
    }
    else{
        var n=moisDeAnnee(mois)[1];
    }
    var semaines=[[nom, annee, n], ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'], [], [], [], [], [], []];

    if(pj==8){
        var pjint=0;
    }
    else{
        var pjint=pj-1;
    }
    var j=2;
    var k=1;

    for (let index = 0; index < 6; index++) {
        j=index+2;
        for (let i = 0; i < 7; i++) {    
            if(j==2){
                if(i<pjint){
                    var t=" ";
                    semaines[j].push(t);
                }
                else{
                    if(k<=n){
                        semaines[j].push(k);
                        k=k+1;
                    }
                }
            }
            else{
                if(k<=n){
                    semaines[j].push(k);
                    k=k+1;
                }
            }
        }
    }
    if(semaines[7].length !=0){
        var taille = semaines[7].length +1;
        var n=semaines[7].length;
        while(n<7){
            t=" ";
            semaines[7].push(t);
            n=semaines[7].length;
        }
    }
    else{
        var taille =semaines[6].length +1;
        var n=semaines[6].length;
        while (n<7){
            var t=" ";
            semaines[6].push(t);
            n=semaines[6].length;
        }
        for (let i = 0; i < 7; i++) {
            var t=" ";
            semaines[7].push(t);  
        }
    }
    if(semaines[6].length == 0){
        var taille = semaines[5].length +1;
        var n=semaines[5].length;
        while(n<7){
            var t=" ";
            semaines[5].push(i,t);
            n=semaines[5].length;
        }
        for (let i = 0; i < 7; i++) {
            var t=" ";
            semaines[6].push(t);
        }
        for (let i = 0; i < 7; i++) {
            var t=" ";
            semaines[7].push(t);
        }
    }
    return [semaines, taille];
}
function monthNumber(a){
    switch (a) {
        case "Janvier":
            return 1;
            break;
        case "Février":
            return 2;
            break;
        case "Mars":
            return 3;
            break;
        case "Avril":
            return 4;
            break;
        case "Mai":
            return 5;
            break;
        case "Juin":
            return 6;
            break;
        case "Juillet":
            return 7;
            break;
        case "Août":
            return 8;
            break;
        case "Septembre":
            return 9;
            break;
        case "Octobre":
            return 10;
            break;
        case "Novembre":
            return 11;
            break;
        case "Décembre":
            return 12;
            break;
        default:
            return 0;
            break;
    }
}

function construitInterfaceMois(moisConstruit){
    var liste1 = moisConstruit[0];
    var debutMS = [moisConstruit[0][0][2], moisConstruit[1]];

    for(let i=2; i<=7; i++){
        for(let j = 0; j <= 6; j++){
            if (((j==2) || (j==3) || (j==5)) && (liste1[i][j] != " ")) {
                var elc = document.createElement('div');
                elc.setAttribute("class", "element_corps");
                var image = document.createElement('img');
                image.setAttribute("src", "../assets/images/folder.png");
                image.setAttribute("alt", "Folder");
                elc.appendChild(image);
                var balisep = document.createElement('p');
                var lien = document.createElement("a");
                balisep.appendChild(lien);
                elc.appendChild(balisep)
                var y = liste1[i][j]+ "_" + monthNumber(liste1[0][0]) + "_" + liste1[0][1]+"/";

                switch (j) {
                    case 2:
                        var x = "Mer. " + liste1[i][j] + " " + liste1[0][0] +" "+ liste1[0][1];
                        break;
                    case 3:
                        var x = "Jeu. " + liste1[i][j] + " " + liste1[0][0] +" "+ liste1[0][1];
                        break;
                    case 5:
                        var x = "Sam. " + liste1[i][j] + " " + liste1[0][0] +" "+ liste1[0][1];
                        break;
                    default:
                        break;
                }

                var z = "_blank";

                if (monthNumber(liste1[0][0]) <= (date.getMonth()+1)){
                    if (monthNumber(liste1[0][0]) < (date.getMonth()+1)) {
                        lien.setAttribute("href", y);
                        lien.setAttribute("target", z);
                        conteneur[0].appendChild(elc);
                    }
                    else{
                        if (liste1[i][j] <= date.getDate()) {
                            lien.setAttribute("href", y);
                            lien.setAttribute("target", z);
                            conteneur[0].appendChild(elc);
                        }
                        else{
                            lien.setAttribute("href", "#")
                            lien.setAttribute("onclick", "userAlert()");
                            conteneur[1].appendChild(elc);
                        }
                    }
                }
                else{
                    lien.setAttribute("href", "#")
                    lien.setAttribute("onclick", "userAlert()");
                    conteneur[1].appendChild(elc);
                }
                lien.innerHTML = x;
            }
        }
    }
    return debutMS;
}

function construitInterfaceMoisSA(moisConstruit){
    var debutMS = [moisConstruit[0][0][2], moisConstruit[1]];
    return debutMS;
}

function positionPremierJourAnnee(annee){
    var m = annee-1970;
    if(m < 0){
        m=-m+1;
        var d=4;
        for (let a = 1; a < m; a++) {
            annee=1970 - a;
            var f=d-1
            if(f==0){
                f=7;
            }
            if(anneeBissextile(annee)==1){
                d=f-1;
                if(d==0){
                    d=7;
                }
            }
            else{
                d=f;
            }                        
        }
        return d;
    }
    else{
        var d=4
        for (let a = 0; a < m; a++) {
            var annee=1970 + a;
            for (let i = 0; i < 12; i++) {
                var t=i+1
                var moisCourant = construitMois(d,t,annee)
                d=construitInterfaceMoisSA(moisCourant)[1];
            }
        }
        return d
    }
}

function cMois(a,b) {
    var c=positionPremierJourAnnee(b);
    for (let i = 0; i < 12; i++) {
        var t=i+1;
        var moisCourant = construitMois(c,t,b);
        if (t==a) {
          c=construitInterfaceMois(moisCourant)[1];
        }
        else{
            c=construitInterfaceMoisSA(moisCourant)[1];
        }
    }
}

function userAlert() {
    alert("Cette séance est à venir. Restez attentif ...");
}

for(let i=8; i<=12; i++){
    cMois(i,2022);
}
