//
function cbeGenerator() {
    var newCat = document.createTextNode("Category name");
    var newBud = document.createTextNode("Budget");
    var newExp = document.createTextNode("Expenses");

    var inputElement = document.createElement("input");
    var inputElement2 = document.createElement("input");
    var inputElement3 = document.createElement("input");
    var breakElement = document.createElement("br");
    var breakElement2 = document.createElement("br");
    var breakElement3 = document.createElement("br");

    var cln = breakElement.cloneNode(true);
    var cln2 = breakElement.cloneNode(true);
    var cln3 = breakElement.cloneNode(true);
    var cln4 = breakElement.cloneNode(true);
    var cat = document.getElementById("categories");

    inputElement.setAttribute("class", "cInput");
    inputElement2.setAttribute("class", "bInput");
    inputElement3.setAttribute("class", "eInput");

    cat.appendChild(newCat);
    cat.appendChild(breakElement);
    cat.appendChild(inputElement);

    cat.appendChild(breakElement2);
    cat.appendChild(newBud);
    cat.appendChild(cln);
    cat.appendChild(inputElement2);

    cat.appendChild(breakElement3);
    cat.appendChild(newExp);
    cat.appendChild(cln2);
    cat.appendChild(inputElement3);
    cat.appendChild(cln3);
    cat.appendChild(cln4);
}