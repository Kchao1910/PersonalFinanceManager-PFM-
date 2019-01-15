function cbeGenerator() {
    var newCat = document.createTextNode("Category");
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

// Need to erase previous calculations
// Also, inputting nothing will output negative sign for final total
function calculate2() {
    var budgetList = document.getElementsByClassName("bInput");
    var expenseList = document.getElementsByClassName("eInput");
    var monthName = document.getElementById("monthList").value;
    var k;
    var budgetTotal = 0;
    var expenseTotal = 0;
    var b = parseFloat(budgetTotal);
    var c = parseFloat(expenseTotal);

    var t = document.getElementById("total").hasChildNodes();
    var tot = document.getElementById("total");

    if (t == false) {
        for (k = 0; k < budgetList.length; k++) {
            var a = parseFloat(budgetList[k].value);
            var d = parseFloat(expenseList[k].value);
            b = b + a;
            c = c + d;
        }
        
        var monthHeader = document.createTextNode(monthName + " Overview");
        var test = document.createTextNode("Total Budget: $" + b.toFixed(2));
        var test2 = document.createTextNode("Total Expenses: $" + c.toFixed(2));
    
        if (b >= c) {
            var test3 = document.createTextNode("Total Left: $" + (b-c).toFixed(2));
        } else if (b < c) {
            var test3 = document.createTextNode("Total Left: -$" + Math.abs(b-c).toFixed(2));
        } else {
            var test3 = document.createTextNode("Total Left: $" + (b-c).toFixed(2));
        }
    
        var breakElement4 = document.createElement("br");
        var breakElement5 = document.createElement("br");
        var breakElement6 = document.createElement("br");
        var breakElement7 = document.createElement("br");
    
        tot.appendChild(monthHeader);
        tot.appendChild(breakElement7);
        tot.appendChild(test);
        tot.appendChild(breakElement4);
        tot.appendChild(test2);
        tot.appendChild(breakElement5);
        tot.appendChild(test3);
        tot.appendChild(breakElement6);


    } else {

        while (tot.firstChild) {
            tot.removeChild(tot.firstChild);
        }
        
        for (k = 0; k < budgetList.length; k++) {
            var a = parseFloat(budgetList[k].value);
            var d = parseFloat(expenseList[k].value);
            b = b + a;
            c = c + d;
        }
    
        var monthHeader = document.createTextNode(monthName + " Overview");
        var test = document.createTextNode("Total Budget: $" + b.toFixed(2));
        var test2 = document.createTextNode("Total Expenses: $" + c.toFixed(2));
    
        if (b >= c) {
            var test3 = document.createTextNode("Total Left: $" + (b-c).toFixed(2));
        } else if (b < c) {
            var test3 = document.createTextNode("Total Left: -$" + Math.abs(b-c).toFixed(2));
        } else {
            var test3 = document.createTextNode("Total Left: $" + (b-c).toFixed(2));
        }
    
        var breakElement4 = document.createElement("br");
        var breakElement5 = document.createElement("br");
        var breakElement6 = document.createElement("br");
        var breakElement7 = document.createElement("br");
    
        tot.appendChild(monthHeader);
        tot.appendChild(breakElement7);
        tot.appendChild(test);
        tot.appendChild(breakElement4);
        tot.appendChild(test2);
        tot.appendChild(breakElement5);
        tot.appendChild(test3);
        tot.appendChild(breakElement6);
 
    }
}

function csvGenerate() {
    var catList = document.getElementsByClassName("cInput");
    var budgetList = document.getElementsByClassName("bInput");
    var expenseList = document.getElementsByClassName("eInput");
    var csvFileName = document.getElementById("csvName").value;
    var i, j;

    var cL = [];
    var bL = [];
    var eL = [];
    var tL = [];
    
    var row = [];

    for (i = 0; i < catList.length; i++) {
        var w = catList[i].value;
        cL[i] = w;
        var x = parseFloat(budgetList[i].value);
        bL[i] = x;
        var y = parseFloat(expenseList[i].value);
        eL[i] = y;
        var z = x - y;
        tL[i] = z;
    }

    for (j = 0; j < cL.length; j++) {
        row[j] = [cL[j], bL[j], eL[j], tL[j]];
    }

    var csv = 'Category Name, Budget, Expenses, Total Left\n';
    row.forEach(function(rowList) {
            csv += rowList.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    // make hyperlink download
    var link = document.createElement('a');
    link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    link.target = '_blank';
    link.download = csvFileName + ".csv";
    link.click();
}