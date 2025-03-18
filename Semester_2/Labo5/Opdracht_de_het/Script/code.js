const setup = () => {
    let input = document.getElementById('input');
    let btnConsole = document.getElementById('btnConsole');

    btnConsole.addEventListener('click', () => toConsole(input));
}

const toConsole = (input) => {
    let woord = input.value;
    console.log(woord);

    let nieuwWoord = woord.split("de").join("het");

    console.log(nieuwWoord);
};
window.addEventListener("load", setup);