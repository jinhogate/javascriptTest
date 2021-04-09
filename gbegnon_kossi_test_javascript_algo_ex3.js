function initex3(){
    
let arrayDigitsVerifys = JSON.parse(localStorage.getItem('arrayDigitsVerify'));
let tabColumn;
let tabRegion;
let long = arrayDigitsVerifys.length;
tabRegion = new Array(long);
tabColumn = new Array(long);
console.log(long)
/**
 *   Call to verify function 
 */

/**
 * This function allows us to validate the position rule in the table provided 
 * position can be {Horizontal position, or vertical or region and it is a table with 9 cells}
 */

function toVerify(tableDigitsPosition) {
    if (tableDigitsPosition instanceof Array) {
        if (isAllNumber(tableDigitsPosition) && isAllDifferent(tableDigitsPosition)) {
            return true;
        }
    } else {
        return "Error! l'input n'est pas un tableau";
    }
    return false;
}


/**
 * This function verifys if the all value in position'cells are the number
 * return true if they are number, false else
 */
function isAllNumber(tableDigitsPosition) {
    const res = tableDigitsPosition.every(element => {
        return (element > 0);
    });
    return res;
}

/**
 * This function check wheter the numbers are each other different
 * return true if the value are different each other and false else
 */
function isAllDifferent(tableDigitsPosition) {
    let tab = [];
    toCopyArrayNumber(tableDigitsPosition, tab);
    let currentValue = 0;
    let nextValue = 0;
    let long = tab.length;
    tab.sort((a, b) => a - b); //order the element in tab by croissance
    for (let i = 0; i < long - 1; i++) {
        currentValue = tab[i];
        nextValue = tab[i + 1];
        if (currentValue === nextValue) {
            return false;
        }
    }
    return true;
}

/**
 * This function allows us to copy element'of a table in another one
 * @param {This } arrayToCopy 
 * @param {*} arrayTab 
 */
function toCopyArrayNumber(arrayToCopy, arrayTab) {
    if (arrayToCopy instanceof Array && arrayTab instanceof Array) {
        let counter = 0;
        arrayToCopy.forEach(element => {
            arrayTab[counter] = element;
            counter++;
        })
    } else {
        console.log("Error! les paramètres d'entrée devraient être des Array")
    }
}
 /**
  * End of the call
  */


/**
 * This unction validate each position of arrayNumber provided and display error message if there are.
 * @param {*} message 
 * @param {*} tab 
 */
function toValidate(message, tab) {
    if (tab instanceof Array) {
        let positon = 0;
        tab.forEach(element => {
            if (!toVerify(element)) {
                toDisplay(message, positon, element);
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
            tabColumn[counter][i] = arrayDigitsVerifys[i][counter];
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
        region += arrayDigitsVerifys[lineRegion][i].toString();
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
function toDisplay(message, position, errorPositionValues) {
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
    toValidate('Ligne', arrayDigitsVerifys);
})();

(function toValidateColumn() {
    toValidate('Column', getColumnTable());
})();

(function toValidateRegion() {
    toValidate('Region', getRegionTable());
})();

}