// document.addEventListener("submit", search);

// function search(event) {
//   event.preventDefault();
//   const cpInput = document.querySelector("#codepostal").value;
//   const cpUrl = `https://geo.api.gouv.fr/communes?codePostal=${cpInput}`;
//   const cityInput = document.querySelector("#nomville").value;
//   const cityUrl = `https://geo.api.gouv.fr/communes?nom=${cityInput}`;

//   let url = "";
//   if (cpInput !== "") {
//     url = cpUrl;
//   } else if (cityInput !== "") {
//     url = cityUrl;
//   }

//   if (url !== "") {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         showData(data);
//       })
//       .catch((error) => console.error(error));
//   }
// }

// function showData(data) {
//   const cp = data[0].codesPostaux;
//   const ville = data[0].nom;

//   document.querySelector(".résultat").textContent = cp + ", " + ville;
// }
// const codePostalInput = document.getElementById('codepostal');
// const resultatOutput = document.querySelector('.résultat');

// codePostalInput.addEventListener('input', () => {
//   const codePostal = codePostalInput.value.trim();

//   if (codePostal.length === 5) {
//     fetch(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}&fields=nom,codesPostaux`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.length > 0) {
//           resultatOutput.textContent = data[0].nom;
//         } else {
//           resultatOutput.textContent = "Aucune ville trouvée";
//         }
//       })
//       .catch(error => console.error(error));
//   } else {
//     resultatOutput.textContent = "";
//   }
// });
// let resultat = "";
// // Fonction pour effectuer la recherche par code postal
// function rechercheParCodePostal(codePostal) {
//   // URL de l'API de l'INSEE pour la recherche par code postal
//   const url = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`;
  
//   // Requête GET à l'API de l'INSEE
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Récupération du nom de la ville et de son code postal
//       const ville = data[0].nom;
//       const codePostal = cp = data[0].codesPostaux;
      
//       // Affichage du résultat dans le champ "#résultat"
//       const resultat = document.querySelector("#résultat");
//       resultat.textContent = `${ville} (${codePostal})`;
//     })
//     .catch(error => console.error(error));
// }

// // Fonction pour effectuer la recherche par nom de ville
// function rechercheParNomVille(nomVille) {
//   // URL de l'API de l'INSEE pour la recherche par nom de ville
//   const url = `https://geo.api.gouv.fr/communes?nom=${nomVille}`;
  
//   // Requête GET à l'API de l'INSEE
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Récupération du nom de la ville et de son code postal
//       const ville = data[0].nom;
//       const codePostal = data[0].codesPostaux;
      
//       // Affichage du résultat dans le champ "#résultat"
//       const resultat = document.querySelector("#résultat");
//       resultat.textContent = `${ville} (${codePostal})`;
//     })
//     .catch(error => console.error(error));
// }

// // Surveillance de l'input codepostal
// const codePostalInput = document.querySelector("#codepostal");
// codePostalInput.addEventListener("input", event => {
//   const codePostal = event.target.value;
//   rechercheParCodePostal(codePostal);
// });

// // Surveillance de l'input nomville
// const nomVilleInput = document.querySelector("#nomville");
// nomVilleInput.addEventListener("input", event => {
//   const nomVille = event.target.value;
//   rechercheParNomVille(nomVille);
// });
