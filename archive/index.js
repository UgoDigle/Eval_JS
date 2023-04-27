document.querySelector("#codepostal").addEventListener("input", rechercheCP);
document.querySelector("form").addEventListener("submit", rechercheNomVille);

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

function rechercheNomVille(event){
    event.preventDefault();
    document.querySelector("#liste_ville").innerHTML="";
    const cityInput = document.querySelector("#nomville").value;
    const cityUrl = `https://geo.api.gouv.fr/communes?nom=${cityInput}`;
    fetch(cityUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showData(data);
      })
      .catch((error) => console.error(error));
  }

  
  const select = document.querySelector("#liste_ville")

  function showData(data) {
    while (select.hasChildNodes()) {
        select.removeChild(select.lastChild);
      }
    const communes = data.map(d => d.nom);
    const cp = data[0].codesPostaux;
    select.style.visibility = 'visible';
    console.log(select);
    communes.forEach(commune => {
    const option = document.createElement("option");
    option.textContent = commune;
    select.appendChild(option);
    });
    const resultat = document.querySelector(".résultat");
    resultat.innerHTML = "";
    if (cp.length === 1) {
    resultat.textContent = cp[0];
    } else {
    const ul = document.createElement("ul");
    cp.forEach(codePostal => {
    const li = document.createElement("li");
    li.textContent = codePostal;
    ul.appendChild(li);
    });
    resultat.appendChild(ul);
    }
    resultat.appendChild(select);
    // document.querySelector("#codepostal").value="";
    // document.querySelector("form").value="";

    }

// select.setAttribute("onclick", "nomville");
// select.addEventListener("change", majCP)

// function majCP(){
//     console.log("ok");


//     const selectedCommune = this.value;
//     const selectedData = data.find(d => d.nom === selectedCommune);
//     const selectedCp = selectedData.codesPostaux[0];
//     document.querySelector(".cp-resultat").textContent = selectedCp;
// };