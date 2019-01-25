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