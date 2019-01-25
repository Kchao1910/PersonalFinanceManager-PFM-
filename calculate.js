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