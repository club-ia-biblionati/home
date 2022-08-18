var donnees = [
    [
        "Créer une fonction qui, une fois exécutée renvois, construit l'interface d'un mois et retourne la position du premier jour du mois suivant.",
        "#dans cette fonction nous utilisons d'autres fonctions précédement créer au CLUB IA<br>     def construitInterfaceMois(moisConstruit):<br>        liste1 = moisConstruit[0]<br>        debutMS = moisConstruit[1]<br>        print(liste1[0][0], end=\", \")<br>        print(liste1[0][1])<br>        print(\"---------------------------\")<br>        i=1<br>        j=0<br>        for j in [0,1,2,3,4,5,6]:<br>            for i in [1,2,3,4,5,6,7]:<br>                if(len(str(liste1[i][j]))==1):<br>                    print(liste1[i][j], end=\"   \")<br>                else:<br>                    print(liste1[i][j], end=\"  \")<br>            print(\"\")<br>        print(\"---------------------------\")<br>        return debutMS",
        "Didier AITONDJI"
    ],
    [
        "Pour cette fois-ci, faites en sorte que la fonction construit le mois sans l'affiché et retourne la position du premier jour du mois suivant.",
        "<br>    def construitInterfaceMoisSA(moisConstruit):<br>        liste1 = moisConstruit[0]<br>        debutMS = moisConstruit[1]<br>        return debutMS",
        "Didier AITONDJI"
    ]
]