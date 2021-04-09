import { toVerify } from './gbegnon_kossi_test_javascript_algo_ex2.js';
import { arrayDigitsVerify } from './gbegnon_kossi_test_javascript_algo_ex1.js';

let tabColumn;
let tabRegion;
let long = arrayDigitsVerify.length;
tabRegion = new Array(long);
tabColumn = new Array(long);
/**
 * This unction validate each position of arrayNumber provided and display error message if there are.
 * @param {*} message 
 * @param {*} tab 
 */
function toValidate(message, tab, id) {
    if (tab instanceof Array) {
        let positon = 0;
        tab.forEach(element => {
            if (!toVerify(element)) {
                toDisplay(message, positon, element, id);
            }
            positon++;
        });
    } else {
        console.log("Error! le paramètre attendu est un Array");
    }
}

/**
 * This function transposes line of arrayNumber provided to column
 * and return the new array create in the getColumnTable variable
 */
const getColumnTable = function () {
    let counter = 0;
    while (counter < long) {
        tabColumn[counter] = new Array(long);
        for (let i = 0; i < long; i++) {
            tabColumn[counter][i] = arrayDigitsVerify[i][counter];
        }
        counter++;
    }
    return tabColumn;
}

/**
 * This function is used to produce the rgion part in the arrayNumber provided
 * @param {*} lineRegion 
 * @param {*} columnRegion 
 */
function toReadRegion(lineRegion, columnRegion) {
    let browseCounter9 = 0;
    let region = "";
    for (let i = (columnRegion - 3); i < columnRegion, browseCounter9 < long; i++, browseCounter9++) {
        if (i == columnRegion) {
            i = (columnRegion - 3);// reset the counter 
            lineRegion++;//deal now with the line below 
        }
        region += arrayDigitsVerify[lineRegion][i].toString();
    }
    return region.split('');
}
/**
 * This function gets all region zone in the table
 */
const getRegionTable = function () {
    let counter = 0;
    for (let lineRegion = 0; lineRegion <= 6; lineRegion += 3) {
        for (let columnRegion = 3; columnRegion <= 9; columnRegion += 3) {
            tabRegion[counter] = toReadRegion(lineRegion, columnRegion);
            counter++;
        }
    }
    return tabRegion;
}

/**
 * This function displays the error message if there are, displays the index position and their elements
 * @param {*} message 
 * @param {*} position 
 * @param {*} errorPositionValues 
 */
function toDisplay(message, position, errorPositionValues, id) {
    let errorMessage = `${message} ${position+1} incorrect ${errorPositionValues}`;
    let p = document.createElement("p");
    let content = document.createTextNode(errorMessage);
    p.appendChild(content);
    let pError = document.getElementById('Error');
    document.body.insertBefore(p, pError);
    console.log(errorMessage);
}

/**
 * All of methods to verify every position and display error
 */
(function toValidateLine() {
    toValidate('Ligne', arrayDigitsVerify, 'lineError');
})();

(function toValidateColumn() {
    toValidate('Column', getColumnTable(), 'columnError');
})();

(function toValidateRegion() {
    toValidate('Region', getRegionTable(), 'regionError');
})();
