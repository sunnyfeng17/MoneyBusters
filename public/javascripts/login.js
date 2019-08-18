const amountChanged = e => {
    const expense = e.currentTarget.dataset.name;
    const amount = e.currentTarget.value;
    sessionStorage.setItem(expense, amount);
}

document.getElementById('amount').addEventListener('input', amountChanged);

sessionStorage.setItem(document.getElementById('amount').dataset.name, 0);

