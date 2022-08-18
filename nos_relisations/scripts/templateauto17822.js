var donnees = [
    [
        "Créer une fonction qui renvois la position du premier jour de n'importe quelle année passée en paramètre.",
        "def positionPremierJourAnnee(annee):<br>        m = annee-1970<br>        if m < 0 :<br>            m=-m+1<br>            d=4<br>            for a in range(1,m):<br>                annee=1970 - a<br>                f=d-1<br>                if(f==0):<br>                    f=7<br>                if(anneeBissextile(annee)==1):<br>                    d=f-1<br>                    if(d==0):<br>                        d=7<br>                else:<br>                    d=f<br>            return d<br>        else:<br>            d=4<br>            for a in range(m):<br>                annee=1970 + a<br>                for i in range(12):<br>                    t=i+1<br>                    moisCourant =construitMois(d,t,annee)<br>                    d=construitInterfaceMoisSA(moisCourant)<br>            return d",
        "Didier AITONDJI"
    ]
]