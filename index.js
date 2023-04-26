document.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  const cpInput = document.querySelector("#codepostal").value;
  const cpUrl = `https://geo.api.gouv.fr/communes?codePostal=${cpInput}`;
  const cityInput = document.querySelector("#nomville").value;
  const cityUrl = `https://geo.api.gouv.fr/communes?nom=${cityInput}`;

  let url = "";
  if (cpInput !== "") {
    url = cpUrl;
  } else if (cityInput !== "") {
    url = cityUrl;
  }

  if (url !== "") {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showData(data);
      })
      .catch((error) => console.error(error));
  }
}

function showData(data) {
  const cp = data[0].codesPostaux;
  const ville = data[0].nom;

  document.querySelector(".résultat").textContent = cp + ", " + ville;
}
