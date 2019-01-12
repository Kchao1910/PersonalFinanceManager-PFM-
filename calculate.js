function calculate() {
    
    var categoryValue = document.getElementById("categoryInput").value;
    var budgetValue = document.getElementById("budgetInput").value;
    var expenseValue = document.getElementById("expenseInput").value;
    var totalValue = budgetValue - expenseValue;

    document.getElementById("finalCategory").innerHTML = ('Category name: ' + categoryValue);
    document.getElementById("finalBudget").innerHTML = ('Budget: $' + budgetValue);
    document.getElementById("finalExpense").innerHTML = ('Expense: $' + expenseValue);

    if (totalValue >= 0) {
        document.getElementById("finalTotal").innerHTML = ('Total: $' + totalValue.toFixed(2));
    } else if (totalValue < 0) {
        document.getElementById("finalTotal").innerHTML = ('Total: -$' + Math.abs(totalValue.toFixed(2)) + ' (You\'re overbudget by $' + Math.abs(totalValue.toFixed(2)) + ')');
    } else {
        document.getElementById("finalTotal").innerHTML = ("Whoops: looks like we missed an error.");
    }
}