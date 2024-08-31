const periodicTable = document.getElementById('periodicTable');

for (let i = 1; i <= 18; i++) {
    const groupNumber = document.createElement('div');
    groupNumber.className = 'group-number';
    groupNumber.textContent = i;
    groupNumber.style.gridRow = 1;
    groupNumber.style.gridColumn = i + 1;
    periodicTable.appendChild(groupNumber);
}

for (let i = 1; i <= 7; i++) {
    const periodNumber = document.createElement('div');
    periodNumber.className = 'period-number';
    periodNumber.textContent = i;
    periodNumber.style.gridColumn = 1;
    periodNumber.style.gridRow = i + 1;
    periodicTable.appendChild(periodNumber);
}

elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.className = `element ${element.category}`;
    elementDiv.style.gridColumn = element.column + 1;
    elementDiv.style.gridRow = element.row + 1;
    elementDiv.innerHTML = `
        <div class="atomic-number">${element.atomicNumber}</div>
        <div class="symbol">${element.symbol}</div>
        <div class="name">${element.name}</div>
    `;
    periodicTable.appendChild(elementDiv);
});