let films = [

    {
        id : 0,
        nom : "Je suis une légende",
        value : true,
        date : "2007",
        disponibilité : "Disponible",
    },
    {
        id : 1,
        nom : "Gladiateur",
        value : false,
        date : "2014",
        disponibilité : "Non disponible",
    },
    {
        id : 2,
        nom : "Le loup de wall street",
        value : true,
        date : "2006",
        disponibilité : "Disponible",
    },
    {
        id : 3,
        nom : "Scarface",
        value : false,
        date : "2001",
        disponibilité : "Non disponible",
    },
    {
        id : 4,
        nom : "Les infiltrés",
        value : true,
        date : "2002",
        disponibilité : "Disponible",
    },

]

films.forEach(film => {
    console.log(film.nom)
});

films.forEach(film => {
    console.log((film.nom),(film.date))
});

console.log(films)
// console.log(films.nom)
// console.log(films.nom).length
// console.log(films[".nom"])
// console.log(films[".nom"].length)
// console.log(films["nom".length])
// console.log(films[nom.length])
// console.log(films[nom].length)
// console.log(films[nom])
// console.log(films[(nom)])
// console.log(films[(nom).length])
// console.log(films[(nom)].length)
// console.log(films(nom))

