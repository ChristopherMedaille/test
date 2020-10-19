# Test repo for Takoway
Création d'un mini-site de 3 pages.

    1 page de formulaire (pas d'authent en soit), on garde le nom en sessionStorage par exemple. Une fois validé, on accède la page suivante
    1 page de listing de pays :
        API : https://restcountries.eu/rest/v2/all
        Liste simple avec 2/3 colonnes (nom, capital, region)
        Possibilité de filtrer sur le nom
    1 page qui détaille le contenu du pays
    Bonus : Faire une pagination ou un scrollToLoad sur la page de listing & revenir au niveau du pays cliqué lors du retour page détail vers liste

En soit pas de design particulier (si tu veux prendre du material ou autre, pas de souci), on veut principalement voir le code associé.

# Pour executer le test :
* Pull le projet
* Executer un **npm install**
* Lancer le projet via **ng serve**
* Ouvrir une page internet et aller à l'adresse *localhost:4200*