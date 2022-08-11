//fonction pour vérifier si une année est bissextile ou pas. Elle retourne 0 ou 1
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

function construitInterfaceMois(moisConstruit){
    var liste1 = moisConstruit[0];
    var debutMS = [moisConstruit[0][0][2], moisConstruit[1]];

    var tetemois = document.querySelector(".tetemois");
    var nomMois = tetemois.getElementsByTagName('div')[0];
    tetemois.removeChild(nomMois);
    var lebas = document.querySelector(".lebas");
    var jours = document.querySelector(".jours");
    lebas.removeChild(jours);
    //var div1 = document.createElement("div");
    //div1.setAttribute("class", "mois");


    var div2 = document.createElement("div");
    div2.innerHTML= liste1[0][0] + ",  l'an " + liste1[0][1];
    div2.setAttribute("class", "nomMois");
    tetemois.appendChild(div2);
    //div1.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "jours");
    div3.setAttribute("id", "jours");

    //var i=1;
    //var j=0;
    for (let j = 0; j <= 6; j++) {
        for (let i = 1; i <= 7; i++) {
            var span = document.createElement("span");
            span.innerHTML = liste1[i][j];
            span.setAttribute('class', 'jr')

            if (liste1[i][j] != " ") {
                span.setAttribute("id", "jNcourant");
                span.setAttribute("onclick", "envoisDetails(this," + liste1[i][j]+","+ monthNumber(liste1[0][0]) + ","+ liste1[0][1]+","+ j + ");");
            }

            if ((liste1[0][1] == acourant) && (liste1[0][0] == mcourant()) && (liste1[i][j] == jcourant))  {
                span.setAttribute("id", "jcourant");
                envoisDetails(span, liste1[i][j], monthNumber(liste1[0][0]), liste1[0][1],j);
                span.style.backgroundColor='red';
            }
            div3.appendChild(span);
        }
    }
    lebas.appendChild(div3);
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

function anneeComplete(b){
    var c=positionPremierJourAnnee(b);
    for (let i = 1; i <= 12; i++) {
        var moisCourant = construitMois(c,i,b);
        c=construitInterfaceMois(moisCourant)[1];
    }
}

var mc = date.getMonth() + 1;
var anneCourant = acourant;
cMois(mc,anneCourant);


function moisSuivant() {
    mc=mc+1;
    if(mc==13)
    {
        mc=1;
        anneCourant=anneCourant+1;
    }
    cMois(mc,anneCourant);
}

function moisPrecedent() {
    mc=mc-1;
    if(mc==0)
    {
        mc=12;
        anneCourant=anneCourant-1;
    }
    cMois(mc,anneCourant);
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


var btnSend = document.querySelector(".idenvoie");

btnSend.addEventListener('click', (e)=>{
    e.preventDefault();
    var valMois = document.querySelector("#moisen").value;
    var numMois = monthNumber(valMois);
    var annee = parseInt(document.getElementById("anneeen").value);
    anneCourant = annee;
    mc = numMois;
    cMois(mc,anneCourant);
})

// La fonction suivante  est la fonction qui nous envois des données sur un jour de l'année en cours comme de n'importe quelle année.
// la fonction prend : infosJoursJ(jour, mois)
function infosJoursJ(a,b) {
    switch (b) {
        case "Janvier":
            var noms=[
                ["Janvier"],
                ["Basile"],
                ["Geneviève"],
                ["Odilon"],
                ["Epiphanie"],
                ["Mélanie"],
                ["Raymond"],
                ["Lucien"],
                ["Alix"],
                ["Guillaume"],
                ["Pauline"],
                ["Tatiana"],
                ["Yvette"],
                ["Nina"],
                ["Rémi"],
                ["Marcel"],
                ["Roseline"],
                ["Prisca"],
                ["Marius"],
                ["Sébastien"],
                ["Agnès"],
                ["Vincent"],
                ["Barnard"],
                ["Fr. de Sales"],
                ["Conv. de Paul"],
                ["Paule"],
                ["Angèle"],
                ["Th. d'Aquin"],
                ["Gildas"],
                ["Martine"],
                ["Marcelle"]
            ];
            return noms[a];
            break;
        case "Février":
            var noms=[
                ["Ella"],
                ["Présentation"],
                ["Blaise"],
                ["Véronique"],
                ["Agathe"],
                ["Gaston"],
                ["Eugénie"],
                ["Jacqueline"],
                ["Apolline"],
                ["Arnaud"],
                ["Notre Dame de Lourdes"],
                ["Félix"],
                ["Béatrice"],
                ["Valentin"],
                ["Claude"],
                ["Julienne"],
                ["Alexis"],
                ["Bernadette"],
                ["Gabin"],
                ["Aimée"],
                ["Damien"],
                ["Isabelle"],
                ["Lazare"],
                ["Modeste"],
                ["Roméo"],
                ["Nestor"],
                ["Honorine"],
                ["Romain"],
                ["Auguste"]
            ];
            return noms[a];
            break;
        case "Mars":
            var noms=[
                ["Aubin"],
                ["Ch. le Bon"],
                ["Guénolé"],
                ["Casmir"],
                ["Olive"],
                ["Colette"],
                ["Félicité"],
                ["Jean de Dieu"],
                ["Françoise"],
                ["Vivien"],
                ["Rosine"],
                ["Justine"],
                ["Rodrigue"],
                ["Mathilde"],
                ["Louise"],
                ["Bénédicte"],
                ["Patrice"],
                ["Cyrille"],
                ["Joseph"],
                ["PRINTEMPS"],
                ["Clémence"],
                ["Léa"],
                ["Victorien"],
                ["Cathérine de Suède"],
                ["Annonciation"],
                ["Larissa"],
                ["Habib"],
                ["Gontran"],
                ["Gwladys"],
                ["Amédée"],
                ["Benjamin"]
            ];
            return noms[a];
            break;
        case "Avril":
            var noms=[
                ['Hughes'],
                ['Sandrine'],
                ['Richard'],
                ['Isidore'],
                ['Irène'],
                ['Marcelle'],
                ['J-B de la Salle'],
                ['Julie'],
                ['Gautier'],
                ['Fulbert'],
                ['Stanislas'],
                ['Pâcques'],
                ['Lundi de Pâcques'],
                ['Maxime'],
                ['Paterne'],
                ['Bénoît-Joseph'],
                ['Anicet'],
                ['Parfait'],
                ['Emma'],
                ['Odette'],
                ['Anselme'],
                ['Alexandre'],
                ['Georges'],
                ['Fidèle'],
                ['Marc'],
                ['Alida'],
                ['Zita'],
                ['Valérie'],
                ['Cathérine de Sienne'],
                ['Robert']
            ];
            return noms[a];
            break;
        case "Mai":
            var noms=[
                ['Fêtes du travail'],
                ['Boris'],
                ['Phillipe,Jacques'],
                ['Sylvain'],
                ['Judith'],
                ['Prudence'],
                ['Gisèle'],
                ['VICTOIRE 1945'],
                ['Pacôme'],
                ['Solange'],
                ['Estelle'],
                ['Achille'],
                ['Rolande'],
                ['Matthias'],
                ['Denise'],
                ['Honoré'],
                ['Pascal'],
                ['Eric'],
                ['Yves'],
                ['Bernadin'],
                ['ASCENSION'],
                ['Emile'],
                ['Didier'],
                ['Donatien'],
                ['Sophie'],
                ['Bérenger'],
                ['Augustin'],
                ['Germain'],
                ['Aymar'],
                ['Ferdinand'],
                ['PENTECÔTE']
            ];
            return noms[a];
            break;
        case "Juin":
            var noms=[
                ['Lundi de Pentécote'],
                ['Blandine'],
                ['Kévin'],
                ['Clotilde'],
                ['Igor'],
                ['Norbert'],
                ['Fête des Mères'],
                ['Médard'],
                ['Diane'],
                ['Landry'],
                ['Barnabé'],
                ['Guy'],
                ['Antoine de Padou'],
                ['Elisée'],
                ['Germaine'],
                ['J. F. Régis'],
                ['Hervé'],
                ['Léonce'],
                ['Romuald'],
                ['ETE'],
                ['Fête des Pères'],
                ['Alban'],
                ['Audrey'],
                ['Jean-Baptiste'],
                ['Prosper'],
                ['Anthelme'],
                ['Fernand'],
                ['Irénée'],
                ['Pierre-Paul'],
                ['Martial']
            ];
            return noms[a];
            break;
        case "Juillet":
            var noms=[
                ['Thierry'],
                ['Martinien'],
                ['Thomas'],
                ['Florent'],
                ['Antoine'],
                ['Mariette'],
                ['Raoul'],
                ['Thibault'],
                ['Amandine'],
                ['Ulrich'],
                ['Benoit'],
                ['Olivier'],
                ['Henri et Joel'],
                ['Fete National'],
                ['Donald'],
                ['ND Mt Carmel'],
                ['Charlotte'],
                ['Frédéric'],
                ['Arsène'],
                ['Marina'],
                ['Victor'],
                ['Marie Madelaine'],
                ['Brigitte'],
                ['Christine'],
                ['Jacques'],
                ['Anne,Joachim'],
                ['Nathalie'],
                ['Samson'],
                ['Marthe'],
                ['Juliette'],
                ['Ignace de L']
            ];
            return noms[a];
            break;
        case "Août":
            var noms=[
                ['Alphonse'],
                ['Julien Eymard'],
                ['Lydie'],
                ['Jean-M.vianney'],
                ['Abel'],
                ['Transfiguration'],
                ['Gaétan'],
                ['Dominique'],
                ['Amour'],
                ['Laurent'],
                ['Claire'],
                ['Clarisse'],
                ['Hippolyte'],
                ['Evrard'],
                ['ASSOMPTION'],
                ['Armel'],
                ['Hyacinthe'],
                ['Hélène'],
                ['Jean Eudes'],
                ['Bernard'],
                ['Christophe'],
                ['Fabrice'],
                ['Rose de Lima'],
                ['Barthélémy'],
                ['Louis'],
                ['Natacha'],
                ['Monique'],
                ['Augustin'],
                ['Sabine'],
                ['Fiacre'],
                ['Aristide']
            ];
            return noms[a];
            break;
        case "Septembre":
            var noms=[
                ['Gilles'],
                ['Ingrid'],
                ['Grégoire'],
                ['Rosalie'],
                ['Raissa'],
                ['Bertrand'],
                ['Reine'],
                ['Nativité'],
                ['Alain'],
                ['Inès'],
                ['Adelphe'],
                ['Apollinaire'],
                ['Aimé'],
                ['Croix Glorieuse'],
                ['Roland'],
                ['Edith'],
                ['Renaud'],
                ['Nadège'],
                ['Emilie'],
                ['Davy'],
                ['Matthieu'],
                ['AUTOMNE'],
                ['Constant'],
                ['Thècle'],
                ['Hermann'],
                ['Come et Damien'],
                ['Vinc de Paul'],
                ['Venceslas'],
                ['Michel'],
                ['Jérome']
            ];
            return noms[a];
            break;
        case "Octobre":
            var noms=[
                ["Thé.de l'enfant Jésus"],
                ["Léger"],
                ["Gérard"],
                ["Fr.d'Assise"],
                ["Feur"],
                ["Bruno"],
                ["Serge"],
                ["Pélagie"],
                ["Dénise"],
                ["Ghislain"],
                ["Firmin"],
                ["Wilfried"],
                ["Géraud"],
                ["Juste"],
                ["Thèrèse d'Avila"],
                ["Edwige"],
                ["Beaudoin"],
                ["René"],
                ["Adeline"],
                ["Céline"],
                ["Elodie"],
                ["Jean de Capistran"],
                ["Florent"],
                ["Crépin"],
                ["Dimitri"],
                ["Emeline"],
                ["Jude"],
                ["Narcise"],
                ["Bienvenue"],
                ["Quentin"],
                
            ];
            return noms[a];
            break;
        case "Novembre":
            var noms=[
                ["TOUSSAINT"],
                ["Défunts"],
                ["Hbert"],
                ["Charles"],
                ["Sylvie"],
                ["Bernice"],
                ["Carine"],
                ["Geoffroy"],
                ["Théodore"],
                ["Léon"],
                ["ARMISTICE"],
                ["Christan"],
                ["Brice"],
                ["Sidone"],
                ["Albert"],
                ["Marguerite"],
                ["Elisabeth"],
                ["Aude"],
                ["Tanguy"],
                ["Edmond"],
                ["Prés.de Marie"],
                ["Cécile"],
                ["Clément"],
                ["Flora"],
                ["Cathérine"],
                ["Delphine"],
                ["Sévrin"],
                ["Jacq. de la M."],
                ["Saturin"],
                ["André"],
                
            ];
            return noms[a];
            break;
        case "Décembre":
            var noms=[
                ["Florence"],
                ["Viviane"],
                ["François Xavier"],
                ["Barbara"],
                ["Gérald"],
                ["Nicolas"],
                ["Ambroise"],
                ["Imm.Conception"],
                ["Pierre Fourier"],
                ["Romaric"],
                ["Daniel"],
                ["Jeanne F.C"],
                ["Lucie"],
                ["Odile"],
                ["Ninon"],
                ["Alice"],
                ["Gaël"],
                ["Gatien"],
                ["Urbain"],
                ["Théophile"],
                ["HIVER"],
                ["Françoise Xavière"],
                ["Armand"],
                ["Abdèle"],
                ["Noël"],
                ["Etienne"],
                ["Jean"],
                ["innocents"],
                ["David"],
                ["Roger"],
                ["Sylvestre"]
            ];
            return noms[a];
            break;
        default:
            return 0;
            break;
    }
}

//fonction pour connaitre le nombre de jours écoulé dans l'année.

function nbreJoursEcoule(an) {
    var po=positionPremierJourAnnee(an);
    var moispo = date.getMonth()+1;
    var jepo = 0;
    for (let i = 1; i <=moispo; i++) {
        if (i<moispo) {
            jepo = jepo + construitInterfaceMoisSA(construitMois(po,i,an))[0];
            po=construitInterfaceMoisSA(construitMois(po,i,an))[1];
        }
        else
        {
            jepo = jepo + date.getDate();
        }
    }
    return jepo;
} 
function nbreTotalJours(an) {
    var po=positionPremierJourAnnee(an);
    var jepo = 0;
    for (let i = 1; i <=12; i++) {
            jepo = jepo + construitInterfaceMoisSA(construitMois(po,i,an))[0];
            po=construitInterfaceMoisSA(construitMois(po,i,an))[1];
    }
    return jepo;
} 


// envois des données d'une date dans détails
//j jour, m mois (numero), a annee , j1 index du jours dans la liste (0-6),
function envoisDetails(e, j, m, a,j1){
    var joursD = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    var details = document.querySelector(".details");
    var ppdet = document.querySelectorAll(".detsp");
    for (let i = 0; i < ppdet.length; i++) {
        const element = ppdet[i];
        details.removeChild(element);
    }
    var mda = moisDeAnnee(m);

    //personanlisation des span des jours
    /*var eAtt = e.attributes[2].value;
    if (eAtt != "jcourant") {
        resetSpanColor();
        e.style.backgroundColor = "blue";
    }*/
    
    //création des balises p
    var balisep1 = document.createElement("span");
    balisep1.setAttribute("class", "detsp");
    balisep1.innerHTML='<span class="infosspan"> Dates : </span><span class="levraiInfos">' + joursD[j1] + ', ' + j + ' ' + mda[0] + ' ' + a + '</span>&nbsp;';
    details.appendChild(balisep1);

    //création de la deuxième balise p
    var balisep2 = document.createElement("span");
    balisep2.setAttribute("class", "detsp");
    balisep2.innerHTML = '<span class="infosspan"> Prénom du Jour : </span><span class="levraiInfos">' + infosJoursJ(j-1,mda[0])[0] + '</span>&nbsp;';
    details.appendChild(balisep2);
}



function resetSpanColor() {
    var lesSpan = document.querySelector(".lebas").querySelectorAll('.jr');
    for (let i = 0; i < lesSpan.length; i++) {
        const element = lesSpan[i];
        element.style.backgroundColor = 'pink';
        element.style.color = "#003399";
    }
    document.querySelector('#jcourant').style.backgroundColor = 'red';
    document.querySelector('#jcourant').style.color = 'white';
}

var lesSpan = document.querySelector(".lebas").querySelectorAll('.jr');
for (let i = 0; i < lesSpan.length; i++) {
    const element = lesSpan[i];
    element.addEventListener('click', ()=>{
        resetSpanColor();
        element.style.backgroundColor = 'blue';
        element.style.color = 'white';
    })
    
}

//anneeComplete(2022);
// anneeComplete(annee);
// cMois(mois, annee);


// action des bouttons du menu
var menu1 = document.querySelector(".menu1").getElementsByTagName('span');

menu1[0].addEventListener('click', ()=>{
    window.location.reload();
})

menu1[1].innerHTML=nbreJoursEcoule(date.getFullYear()) + " - " + nbreTotalJours(date.getFullYear());

menu1[2].innerHTML = "Times";
/* les actions pour la partie Modal des heures */
var modal2 = document.querySelector('.modal2');
var btn2action = document.querySelector('.btn2action').getElementsByTagName('span')[0];

btn2action.addEventListener('click', ()=>{
    modal2.style.display = "none";
})

menu1[2].addEventListener('click', ()=>{
    modal2.style.display = "block";
})

var contenuModal2 ="" + date.getHours() + " : " + date.getMinutes() + " : " + setInterval(date.getSeconds(), 1000) ;
var contenu2 = document.querySelector(".contenu2")

contenu2.innerHTML = contenuModal2;

/* les actions pour la partie Modal des jours restants */

var modal = document.querySelector('.modal');
var btnaction = document.querySelector('.btnaction').getElementsByTagName('span')[0];

btnaction.addEventListener('click', ()=>{
    modal.style.display = "none";
})

menu1[1].addEventListener('click', ()=>{
    modal.style.display = "block";
})

var contenuModal = "<div><span>L'année " + acourant;
if (anneeBissextile(acourant)==0) {
    contenuModal = contenuModal + " est </span><span> non - Bissextile </span></div>";
}
else
{
    contenuModal = contenuModal + " est <strong> Bissextile </strong></span></div>";
}

contenuModal = contenuModal + "<div> <span> Nombre total de Jour dans l'annéé : </span><span>" + nbreTotalJours(date.getFullYear()) + " </span></div><div><span>Nombre de jour écoulé : </span><span>"+ nbreJoursEcoule(date.getFullYear()) + "</span></div><div><span> Nombre de Jours restant pour la fin de l'annéé </span><span>" + (nbreTotalJours(date.getFullYear())-nbreJoursEcoule(date.getFullYear())) + "</span></div>";
var contenu = document.querySelector('.contenu');
contenu.innerHTML = contenuModal;
/* ***************************************** ************** */