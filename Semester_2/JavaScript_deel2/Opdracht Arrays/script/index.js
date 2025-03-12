

let setup = () => {

    let familie = ["familielid 1", "familielid 2", "familielid 3", "familielid 4", "familielid 5"];

    console.log(familie.length);

    for (let i = 0; i < familie.length; i=i+2)
    {
        console.log("familielid " + familie[i]);
    }

    voegNaamToe(familie);

    for (let i = 0; i < familie.length; i++);{

        console.log ("familielid " + familie[i]);
    }
familie.join (" - ");
}

const voegNaamToe = (leden) =>
{

    leden.push(naam)
}


window.addEventListener("load", setup);