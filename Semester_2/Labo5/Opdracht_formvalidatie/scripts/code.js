const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    let allValid = true;

    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid";
        errVoornaam.innerHTML = "Max. 30 karakters.";
        allValid = false;
    } else {
        txtVoornaam.className = "";
        errVoornaam.innerHTML = "";
    }

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();

    if (!familienaam) {
        txtFamilienaam.className = "invalid";
        errFamilienaam.innerHTML = "Dit veld is verplicht.";
        allValid = false;
    } else if (familienaam.length > 50) {
        txtFamilienaam.className = "invalid";
        errFamilienaam.innerHTML = "Max. 50 karakters";
        allValid = false;
    } else {
        txtFamilienaam.className = "";
        errFamilienaam.innerHTML = "";
    }

    let txtGeboortedatum = document.getElementById("Geboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let Geboortedatum = txtGeboortedatum.value;

    if (!Geboortedatum) {
        txtGeboortedatum.className = "invalid";
        errGeboortedatum.innerHTML = "Verplicht veld";
        allValid = false;
    } else {
        txtGeboortedatum.className = "";
        errGeboortedatum.innerHTML = "";
    }

    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if (!email) {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "Verplicht veld.";
        allValid = false;
    } else if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
        txtEmail.className = "invalid";
        errEmail.innerHTML = "Geen geldig email adres";
        allValid = false;
    } else {
        txtEmail.className = "";
        errEmail.innerHTML = "";
    }

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if (aantalKinderen && (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen > 99)) {
        txtAantalKinderen.className = "invalid";
        if (isNaN(aantalKinderen)) {
            errAantalKinderen.innerHTML = "is geen positief getal";
        } else if (aantalKinderen < 0) {
            errAantalKinderen.innerHTML = "is geen positief getal";
        } else if (aantalKinderen > 99) {
            errAantalKinderen.innerHTML = "is te vruchtbaar";
        }
        allValid = false;
    } else {
        txtAantalKinderen.className = "";
        errAantalKinderen.innerHTML = "";
    }

    if (allValid) {
        alert("Proficiat! Alle velden zijn correct ingevuld.");
    }
};

window.addEventListener("load", setup);
