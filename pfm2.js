// budgetPop: populates the page with elements necessary to generate a budget
function budgetPop() {
    removeAllNodes();

    // parent node
    var body = document.getElementById("parent");

    // create all divs needed for the budget UI
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    div1.id = "div1";
    div2.id = "div2";
    div3.id = "div3";
    div4.id = "div4";
    div5.id = "div5";
    //div6.id = "div6";
    //div7.id = "div7";
    //div8.id = "div8";

    div1.style.fontFamily = 'Major Mono Display';
    div2.style.fontFamily = 'Major Mono Display';
    div3.style.fontFamily = 'Major Mono Display';
    div4.style.fontFamily = 'Major Mono Display';
    div5.style.fontFamily = 'Major Mono Display';
    div6.style.fontFamily = 'Major Mono Display';
    div7.style.fontFamily = 'Major Mono Display';
    div8.style.fontFamily = 'Major Mono Display';

    body.appendChild(div1);
    body.appendChild(div2);
    body.appendChild(div3);
    body.appendChild(div4);
    body.appendChild(div5);
    body.appendChild(div6);
    body.appendChild(div7);
    body.appendChild(div8);

    // creation of drop-down list for month selection
    var monthText = document.createTextNode("Select the month you would like to set a budget for.")
    var monthSelect = document.createElement("select");
    monthSelect.id = "monthList";
    monthSelect.class = "mN";
    monthSelect.name = "monthName";
    monthSelect.style.fontFamily = 'Major Mono Display';
    monthSelect.style.width = "15%";
    monthSelect.style.fontSize = "1.5vw";

    div1.appendChild(monthText);
    div1.appendChild(monthSelect);

    // creation of months
    var m1 = document.createElement("option");
    var m2 = document.createElement("option");
    var m3 = document.createElement("option");
    var m4 = document.createElement("option");
    var m5 = document.createElement("option");
    var m6 = document.createElement("option");
    var m7 = document.createElement("option");
    var m8 = document.createElement("option");
    var m9 = document.createElement("option");
    var m10 = document.createElement("option");
    var m11 = document.createElement("option");
    var m12 = document.createElement("option");

    m1.value = "January";
    m1.innerHTML = "January";
    m2.value = "February";
    m2.innerHTML = "February";
    m3.value = "March";
    m3.innerHTML = "March";
    m4.value = "April";
    m4.innerHTML = "April";
    m5.value = "May";
    m5.innerHTML = "May";
    m6.value = "June";
    m6.innerHTML = "June";
    m7.value = "July";
    m7.innerHTML = "July";
    m8.value = "August";
    m8.innerHTML = "August";
    m9.value = "September";
    m9.innerHTML = "September";
    m10.value = "October";
    m10.innerHTML = "October";
    m11.value = "November";
    m11.innerHTML = "November";
    m12.value = "December";
    m12.innerHTML = "December";

    monthSelect.appendChild(m1);
    monthSelect.appendChild(m2);
    monthSelect.appendChild(m3);
    monthSelect.appendChild(m4);
    monthSelect.appendChild(m5);
    monthSelect.appendChild(m6);
    monthSelect.appendChild(m7);
    monthSelect.appendChild(m8);
    monthSelect.appendChild(m9);
    monthSelect.appendChild(m10);
    monthSelect.appendChild(m11);
    monthSelect.appendChild(m12);
    
    // plus button creation
    var plusText = document.createTextNode("Click the '+' button to create a new category.");
    var plusButton = document.createElement("button");
    var d1 = document.createElement("h6");
    var disclaimer1 = document.createTextNode("(Please fill in all fields before clicking submit)");

    div2.appendChild(plusText);
    div2.appendChild(plusButton);
    div2.appendChild(d1);

    plusButton.id = "plusBtn";
    plusButton.className = "PlusBtn";
    plusButton.onclick = function() {
        cbeGenerator();
    }
    plusButton.innerHTML = "+";
    plusButton.style.fontFamily = 'Major Mono Display';
    plusButton.style.fontSize = "1.5vw";
    plusButton.style.borderRadius = "5px";
    plusButton.style.backgroundColor = "#4EE870";
    plusButton.style.borderStyle = "solid";
    plusButton.style.borderColor = "black";

    d1.fontFamily = 'Major Mono Display';
    d1.style.fontSize = ".67em";
    d1.appendChild(disclaimer1);

    // Div 3 - category creation
    div3.id = "categories";
    var cat = document.createTextNode("Category name");
    var bud = document.createTextNode("Budget");
    var exp = document.createTextNode("Expenses");

    var inp1 = document.createElement("input");
    var inp2 = document.createElement("input");
    var inp3 = document.createElement("input");

    inp1.className = "cInput";
    inp2.className = "bInput";
    inp3.className = "eInput";

    var b1 = document.createElement("br");
    var b2 = document.createElement("br");
    var b3 = document.createElement("br");
    var b4 = document.createElement("br");
    var b5 = document.createElement("br");
    var b6 = document.createElement("br");
    var b7 = document.createElement("br");

    div3.id = "categories";
    div3.appendChild(cat);
    div3.appendChild(b1);
    div3.appendChild(inp1);
    div3.appendChild(b2);
    div3.appendChild(bud);
    div3.appendChild(b3);
    div3.appendChild(inp2);
    div3.appendChild(b4);
    div3.appendChild(exp);
    div3.appendChild(b5);
    div3.appendChild(inp3);
    div3.appendChild(b6);
    div3.appendChild(b7);

    // Submit button generator
    var submitBtn = document.createElement("button");
    var b8 = document.createElement("br");
    var b9 = document.createElement("br");
    submitBtn.className = "btn";
    submitBtn.onclick = function() {
        calculate2();
    }
    submitBtn.style.fontFamily = "Major Mono Display";
    submitBtn.style.fontSize = "1.5vw";
    submitBtn.innerHTML = "Submit";

    div4.appendChild(submitBtn);
    div4.appendChild(b8);
    div4.appendChild(b9);

    // total overview
    div5.id = "total";
    var b10 = document.createElement("br");
    body.appendChild(b10);

    // piechart
    div6.id = "piechart";
    var b11  = document.createElement("br");
    body.appendChild(div6);
    body.appendChild(b11);

    // Optional
    body.appendChild(div7);
    var opt = document.createElement("h4");
    opt.innerHTML = "(Optional)";
    var csvFN = document.createTextNode("Enter in the name you would like to call your csv file.");

    body.appendChild(opt);
    body.appendChild(csvFN);
    
    // csv file
    body.appendChild(div8);
    var chk = document.createTextNode("Then click the '\u2713' button to download the csv file.");
    var p1 = document.createElement("p");
    var inp4 = document.createElement("input");
    var chkBtn = document.createElement("button");

    p1.innerHTML = "(Don't include '.csv' in the name of your file).";
    p1.style.fontSize = ".67em";
    p1.style.fontWeight = "bold";

    inp4.id = "csvName";
    inp4.type = "text";
    inp4.class = "csvInput";

    chkBtn.id = "CB";
    chkBtn.className = "ChkBtn";
    chkBtn.innerHTML = "&#10003";
    chkBtn.onclick = function() {
        csvGenerate();
    }
    chkBtn.style.fontSize = "1.5vw";
    chkBtn.style.backgroundColor = "#4EE870";
    chkBtn.style.borderColor = "black";
    chkBtn.style.borderRadius = "5px";
    chkBtn.style.opacity = ".8";

    div8.appendChild(chk);
    div8.appendChild(p1);
    div8.appendChild(inp4);
    div8.appendChild(chkBtn);
}

// investPop: populates the page with elements necessary to generate a portfolio
function investPop() {
    removeAllNodes();
}

// goalPop: populates the page with elements necessary to generate and track financial goals
function goalPop() {
    removeAllNodes();
}


// removeAllNodes: deletes all content on the page except for the title so that page can repopulate with the desired functionality
function removeAllNodes() {
    var body = document.getElementById("parent");
    var bodyLength = body.childElementCount;

    // This line is to check if all elements except for the 'title' is removed after the user clicks on one of the buttons
    // console.log("Length of body element: " + bodyLength);

    while (bodyLength > 1) {
        body.removeChild(body.lastChild);
        bodyLength = bodyLength - 1;
    }
}

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
        
        var mH = document.createElement("span");
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
        var breakElement8 = document.createElement("br");
        var breakElement9 = document.createElement("br");
        var breakElement10 = document.createElement("br");

        tot.appendChild(mH);
        mH.appendChild(monthHeader);
        mH.style.textDecoration = "underline";
        
        tot.appendChild(breakElement7);
        tot.appendChild(breakElement8);
        tot.appendChild(test);
        tot.appendChild(breakElement4);
        tot.appendChild(breakElement9);
        tot.appendChild(test2);
        tot.appendChild(breakElement5);
        tot.appendChild(breakElement10);
        tot.appendChild(test3);
        tot.appendChild(breakElement6);

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
      
        function drawChart() {
            var catList = document.getElementsByClassName("cInput");
            var budgetList = document.getElementsByClassName("bInput");

            var cL = [];
            var bL = [];

            var l;

            for (l = 0; l < catList.length; l++) {
                var w = catList[l].value;
                cL[l] = w;
                var x = parseFloat(budgetList[l].value);
                bL[l] = x;
            }

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Category');
            data.addColumn('number', 'Budget');

            var z;

            for (z = 0; z < cL.length; z++) {
                 data.addRow([cL[z], bL[z]]);
            }

            var options = {
                fontName: 'Major Mono Display',
                backgroundColor: 'transparent',
                chartArea: {
                    left: '20%',
                    right: '20%',
                    width: '100%',
                    height: '90%'
                },
                legend: {
                    fontName: 'Major Mono Display',
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }

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
    
        var mH = document.createElement("span");
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
        var breakElement8 = document.createElement("br");
        var breakElement9 = document.createElement("br");
        var breakElement10 = document.createElement("br");

        tot.appendChild(mH);
        mH.appendChild(monthHeader);
        mH.style.textDecoration = "underline";
        
        tot.appendChild(breakElement7);
        tot.appendChild(breakElement8);
        tot.appendChild(test);
        tot.appendChild(breakElement4);
        tot.appendChild(breakElement9);
        tot.appendChild(test2);
        tot.appendChild(breakElement5);
        tot.appendChild(breakElement10);
        tot.appendChild(test3);
        tot.appendChild(breakElement6);

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
      
        function drawChart() {
            var catList = document.getElementsByClassName("cInput");
            var budgetList = document.getElementsByClassName("bInput");

            var cL = [];
            var bL = [];

            var l;

            for (l = 0; l < catList.length; l++) {
                var w = catList[l].value;
                cL[l] = w;
                var x = parseFloat(budgetList[l].value);
                bL[l] = x;
            }

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Category');
            data.addColumn('number', 'Budget');

            var z;

            for (z = 0; z < cL.length; z++) {
                 data.addRow([cL[z], bL[z]]);
            }

            var options = {
                fontName: 'Major Mono Display',
                backgroundColor: 'transparent',
                chartArea: {
                    left: "20%",
                    right: "20%",
                    width: "100%",
                    height: "90%"
                },
                legend: {
                    fontName: 'Major Mono Display',
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}