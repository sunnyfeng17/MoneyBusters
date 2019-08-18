const BudgetDetails = (expenses, budget) => {
   const totalExpenses = expenses.reduce((i, sum) => sum += i.amount
    , 0);
    const balance = budget - totalExpenses;
    return {
        expenses: expenses,
        budget: budget,
        balance: balance
    }
}

const expense = (name, amount) => {
    return {
        name: name,
        amount: amount
    }
}

const createFakeData = () => {
    const expenses = [
        expense("Rent", 100),
        expense("Transport", 10),
        expense("Eating Out", 20),
    ];
    return BudgetDetails(expenses, 100)
}

module.exports = {BudgetDetails, createFakeData}