import { arrayNumber } from './Modules/javascript_test_je1.js';

export let arrayDigitsVerify = new Array(9);

 (function init(){
    toReadArrayNumber(arrayNumber, arrayDigitsVerify);
    toDisplayInHtmlTable();
})();
/**
 * This function is used to copy arrayNumber's data to arrayDigitsVerify
 * @param {*} arrayNumber 
 * @param {*} arrayDigitsVerify 
 */
function toReadArrayNumber(arrayNumber, arrayDigitsVerify) {
    if (arrayNumber instanceof Array && arrayDigitsVerify instanceof Array) { //Control if the input parameters are Array
        let counter = 0;
        arrayNumber.forEach(value => {
            arrayDigitsVerify[counter] = value.split(' ');
            counter++;
        });
    } else {
        console.log("Error! le paramètre d'entrée doit être un tableau.");
    }
    return arrayDigitsVerify;
}

/**
 * This function displays the content of arrayDigitsVerify into the html table
 */
function toDisplayInHtmlTable() {
    let displayInLine = "";
    let displayInColumn = "";
    arrayDigitsVerify.forEach(value => {
        displayInLine += "<tr>";
        for (let val of value) {
            displayInColumn += "<td>" + val + "</td>";
        }
        displayInLine += displayInColumn;
        displayInColumn = "";
        displayInLine += "</tr> <br/>";
    });
    document.getElementById('table').innerHTML = displayInLine;
   
}

