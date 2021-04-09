/**
 * This function allows us to validate the position rule in the table provided 
 * position can be {Horizontal position, or vertical or region and it is a table with 9 cells}
 * @param {*} tableDigitsPosition 
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
 * @param {*} tableDigitsPosition 
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
 * @param {*} tableDigitsPosition 
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




