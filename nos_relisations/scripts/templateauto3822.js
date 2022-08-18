var donnees = [
    [
        "Écrire un programme, qui définit 3 variables : une variable de type texte, une variable de type nombre entier, une variable de type nombre décimal et qui affiche leur type.",
        "# -*- coding:UTF-8 -*-<br>chaine = \"La chaine de caractère\"<br>entier = 12<br>decimal = 12.5<br>print(type(chaine))<br>print(type(entier))<br>print(type(decimal))",
        "Emmanuel DEGBEY"
    ],

    [
        "Écrire un programme qui, à partir de la saisie d’un rayon et d’une hauteur, calcule le volume d’un cône circulaire droit.",
        "# -*- coding:UTF-8 -*-<br>        rayon = float(input(\"Entrer le rayon du cône ... \"))<br>        while(rayon<=0):<br>            rayon = float(input(\"Erreur, essayez à nouveau ... \"))<br>        hauteur = float(input(\"Entrer la hauteur du cône ... \"))<br>        while(hauteur<=0):<br>            hauteur = float(input(\"Erreur, essayez à nouveau ... \"))<br>        volume = ((3.14*rayon**2)*hauteur)/3<br>        print(\"Le volume du cône circulaire droit de hauteur {} et de rayon {} est {}.\".format(hauteur, rayon, volume))",
        "Didier AITONDJI"
    ],
    [
        "Écrire un programme, qui ajoute une chaîne de caractères à un nombre entier (Exemple la chaîne ”le chat” et le nombre 3 pour donner le chat + 3).",
        "# -*- coding:UTF-8 -*-<br><br>       chaine = input('Entrer une chaine de caractère ...')<br>       entier = int(input('Entrer un entier ... '))<br>       print('{} + {}'.format(chaine, entier))",
        "Didier AITONDJI"
    ]
]