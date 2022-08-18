var donnees = [
    [
        "Créer un calendrier complet en Python avec toutes les fonctions disponible au club IA",
        "#coding:utf-8<br>        import importlib<br><br>        file = importlib.import_module(\"functions\")<br>        a = int(input(\"Entrer le numéro du mois ...\"))<br>        b = int(input(\"Entrer l'annee ... \"))<br>        c = file.positionPremierJourAnnee(b)<br>        for i in range(12):<br>            t=i+1<br>            moisCourant = file.construitMois(c,t,b)<br>            if t==a:<br>                c=file.construitInterfaceMois(moisCourant)<br>            else:<br>                c=file.construitInterfaceMoisSA(moisCourant)",
        "Didier AITONDJI"
    ]
]