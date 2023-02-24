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
function Ajoutfilms(Titre, DateSortie, Acteurs) {
    this.Titre = Titre;
    this.DateSortie = DateSortie;
    this.Acteurs = Acteurs;
  }
//   let NouveauFilm = [];
  
  let début = prompt ("Pour voir la liste des films tapez 1\nPour connaitre la liste des films avec leurs date de sortie tapez 2\nPour connaitre les films disponibles à la location tapez 3\nPour connaitre les films non disponibles tapez 4\n5")

//   let Nomdufilm = prompt ("Tapez un nom de film à rechercher")
  
  switch (début) {
    case '1':
        films.forEach(Listedesfilms => {
            console.log(Listedesfilms.nom)
        })
        break
    case '2':
        films.forEach(Listedesfilms => {
            console.log((Listedesfilms.nom),(Listedesfilms.date))
        })
        break
    case '3':
        films.forEach( film => {
        if (film.value === true) {
            console.log(`Film disponibles à la location : ${film.nom}`)
            
        }
        })
        let choixfilm = prompt(`Si vous voulez louer un film, tapez son nom :`)
        if (films.nom === choixfilm) {
            films.value === false
            console.log(films)
        }
        films.forEach(ListedesfilmsDisponible => {
        console.log(ListedesfilmsDisponible.value===true)
        })
        break
    case '4':
        films.forEach( film => {
        if (film.value === false) {
            console.log(`Film non disponibles à la location : ${film.nom}`)
        }
        })
        break
    case '5':
        let Titre = prompt ("Tapez un nom de film à ajouté")
        let DateSortie = prompt ("Sa date de sortie")
        let Acteurs = prompt ("Citez le ou les acteurs")
        let nouveaufilms = new Ajoutfilms(Titre, DateSortie, Acteurs);
        films.push(nouveaufilms);
        console.log("Le film a bien été ajouté")
        console.log(films[films.length-1])
        break
  }
  
  // function fiilms (nom,value,date,disponibilité)



// switch (films) {
//     case films:
//         console.log(films)
//         break
//     case films.date:
//         console.log(films.date)
//         break
//     default:
//         break
// }

// films.forEach( film => {
//     console.log((film.nom),(film.date))
// });

// films.forEach(film => {
//     console.log
// });




// Apprentissage switch :

// prompt("Combien as tu gagné d'argent ?")
// let argent = 0;
// switch (argent) {
//     case 20 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break

//     case 150 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break

//     case 250 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break

//     case 350 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break
    
//     case 480 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break

//     case 850 :
//         console.log(`Félicitation, tu as gagné ${argent}€ !`)
//         break
// }



//   films = new film('i', 'i', 'i');
//   films.push(film1);
  
//   films.forEach((element) => console.log(element.film1));