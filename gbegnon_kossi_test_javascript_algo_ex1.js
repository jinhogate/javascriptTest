let arrayDigitsVerify = new Array(9);
/**
 * This function is used to copy arrayNumbers's data to arrayDigitsVerify
 * @param {*} arrayNumbers 
 * @param {*} arrayDigitsVerify 
 */
function toReadarrayNumbers(arrayNumbers, arrayDigitsVerify) {
    if (typeof arrayNumbers === 'object' && typeof arrayDigitsVerify === 'object') { //Control if the input parameters are Array
        let counter = 0;
        arrayNumbers.forEach(value => {
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
