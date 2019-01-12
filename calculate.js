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
        document.getElementById("finalTotal").innerHTML = ("Whoops: looks like we missed an error.");
    }

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