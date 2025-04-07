///// O P D R A C H T   1 /////

//1a
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");

//1b
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description + ".");

//1c
console.log("De afdeling Customer Service heeft " + departments['customer-service'].numberOfEmployees + " medewerkers");

//1d
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description);


// Opdracht 2 en 3 zijn uitgecomment en in opdracht 4 aangepast en samengevoegd. Om de uitwerkingen hiervan niet te verliezen heb ik deze als comment laten staan in plaats van hieronder gelijk aangepast.
///// O P D R A C H T   2 /////

// //2a
// const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);
//
// //2b
// switch (userInput) {
//     case 'marketing':
//         console.log("Je koos " + userInput + ". " + departments.marketing.description);
//         break;
//     case 'sales':
//         console.log("Je koos " + userInput + ". " + departments.sales.description);
//         break;
//     case 'customer-service':
//         console.log("Je koos " + userInput + ". " + departments['customer-service'].description);
//         break;
//
// //2c
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
// }

///// O P D R A C H T   3 /////

// //3a
// const userInput2 = prompt('Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n' +
//     '0: ' + departments.marketing.jobs[0].title + '\n' +
//     '1: ' + departments.marketing.jobs[1].title + '\n' +
//     '2: ' + departments.marketing.jobs[2].title + '\n' +
//     '3: ' + departments.marketing.jobs[3].title);
//
// //3b
// switch (userInput2) {
//     case '0':
//         console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description);
//         break;
//     case '1':
//         console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description);
//         break;
//     case '2':
//         console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description);
//         break;
//     case '3':
//         console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description);
//         break;
//
// //3c
//     default:
//         console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.')
// }


///// O P D R A C H T   4 /////

const afdelingNaam = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');

//De methode Object.hasOwn() kijkt of een object de aangegeven eigenschap als zijn eigen eigenschap heeft en geeft dan "true" of "false" terug.
if (Object.hasOwn(departments, afdelingNaam)) {
    console.log(afdelingNaam + ' is een leuke afdeling om te werken. Er werken op dit moment ' + departments[afdelingNaam].numberOfEmployees + ' medewerkers.');
    const functieTitel = prompt('Je koos ' + afdelingNaam + '. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n' +
        '0: ' + departments[afdelingNaam].jobs[0].title + '\n' +
        '1: ' + departments[afdelingNaam].jobs[1].title + '\n' +
        '2: ' + departments[afdelingNaam].jobs[2].title + '\n' +
        '3: ' + departments[afdelingNaam].jobs[3].title);

    //Omdat we de numerieke waarde van functieTitel meerdere keren willen gebruiken is het handig deze als integer op te slaan
    const functieTitelGetal = parseInt(functieTitel);

    if (functieTitelGetal >= 0 && functieTitelGetal <= 3) {
        console.log("Je koos " + departments[afdelingNaam].jobs[functieTitelGetal].title + ". Een uitdagende rol! " + departments.marketing.jobs[functieTitelGetal].description);
    } else {
        console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.')
    }
} else {
    console.error('Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.');
}

