function calculate() {

    // 4 values must be retrieved in order to output correctly
    // Category name retrieval
    var categoryValue = document.getElementById("categoryInput").value;
    
    // Budget input retieval
    var budgetValue = parseFloat(document.getElementById("budgetInput").value).toFixed(2);

    // Expense input retrieval
    var expenseValue = parseFloat(document.getElementById("expenseInput").value).toFixed(2);

    // Calculate budget left over
    var totalValue = budgetValue - expenseValue;

    // Output: Category, Budget, Expenses, Total
    document.getElementById("finalCategory").innerHTML = ('Category name: ' + categoryValue);
    document.getElementById("finalBudget").innerHTML = ('Budget: $' + budgetValue);
    document.getElementById("finalExpense").innerHTML = ('Expense: $' + expenseValue);

    // Determines whether user is under budget or overbudget
    if (totalValue >= 0) {
        document.getElementById("finalTotal").innerHTML = ('Total: $' + totalValue.toFixed(2));
    } else if (totalValue < 0) {
        document.getElementById("finalTotal").innerHTML = ('Total: -$' + Math.abs(totalValue.toFixed(2)) + ' (You\'re overbudget by $' + Math.abs(totalValue.toFixed(2)) + ')');
    } else {
        document.getElementById("finalTotal").innerHTML = ("Whoops: looks like you didn't enter a value for one of the variables.");
    }


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

// Note-to-self: Making the yes button disappear could limit options for the user. 
// Example: User clicks on 'No' button by mistake and can no longer create a csv file.
// Decision: 'No' button doesn't really do anything, thus, just leave both on in the future
function noDisappear() {
    document.getElementById("NB").style.display = "none";
}

function yesDisappear() {
    document.getElementById("YB").style.display = "none";
}