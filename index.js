// On écoute le champ code postal du formulaire
document.querySelector("#codepostal").addEventListener("input", rechercheCP);

// On va chercher les données dans l'API de l'INSEE
function rechercheCP(event){
    event.preventDefault();
    const cpInput = document.querySelector("#codepostal").value;
    const cpUrl = `https://geo.api.gouv.fr/communes?codePostal=${cpInput}`;
    fetch(cpUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.length === 0){
        document.querySelector(".résultat").textContent = "Code postal non trouvé";
        return;
        }
        showData(data);                
        const nomCommune = data[0].nom;
        document.querySelector("#nomville").value = nomCommune;
    })
    .catch((error) => console.error(error));
}

const select = document.querySelector("#liste_ville")
// On remplit la liste des villes correspondantes
function showData(data) {
    while (select.hasChildNodes()) {
        select.removeChild(select.lastChild);
    }
    const communes = data.map(d => d.nom);
    select.style.visibility = 'visible';    
    communes.forEach(commune => {
        const option = document.createElement("option");
        option.textContent = commune;
        select.appendChild(option);
    });
    const resultat = document.querySelector(".résultat");
    resultat.innerHTML = "";
    resultat.appendChild(select);
}