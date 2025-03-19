const setup = () => {
    let gemeenten = [];

    while (true) {
        let gemeente = prompt("Geef een gemeente op (typ 'stop' om te stoppen):");
        if (gemeente === null || gemeente.toLowerCase() === 'stop') {

            break;
        }

        if (gemeente.trim() !== "") {
            gemeenten.push(gemeente.trim());
        }
    }
    gemeenten.sort();
    let gemeentes = document.getElementById("gemeentes");
    gemeenten.forEach(gemeente => {
        let option = document.createElement("option");
        option.value = gemeente;
        option.textContent = gemeente;
        gemeentes.appendChild(option);
    })
}
window.addEventListener("load", setup);