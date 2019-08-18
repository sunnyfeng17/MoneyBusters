const amountChanged = e => {
    const expense = e.currentTarget.dataset.name;
    const amount = e.currentTarget.value;
    sessionStorage.setItem(expense, amount);
}

const submitBtnClicked = e => {
    const budget = [];
    budget.push(getValue('rent'));
    budget.push(getValue('transport'));
    budget.push(getValue('groceries'));
    budget.push(getValue('phone'));
    budget.push(getValue('allowance'));
    budget.push(getValue('income'));
    var budgetInput = document.getElementById("budget");
    console.log(budget);
    budgetInput.value = JSON.stringify(budget);
}

getValue = name => {
    return {
        name: name, 
        value: parseFloat(sessionStorage.getItem(name))
    };
}
document.getElementById('amount').addEventListener('input', amountChanged);

document.getElementById('submitBtn').addEventListener('click', submitBtnClicked);