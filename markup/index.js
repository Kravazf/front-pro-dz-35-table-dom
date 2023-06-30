const tableWithNumbers = document.createElement('table');
tableWithNumbers.setAttribute('class', 'tableNamber')

let count = 0;
for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('td');
    cell.innerText = count++;
    row.appendChild(cell);
  }
  tableWithNumbers.appendChild(row);
}

document.body.appendChild(tableWithNumbers);


// const tableWithNumbers = document.createElement('table');
// tableWithNumbers.setAttribute('class', 'tableNumber');

// let count = 0;
// for (let i = 0; i < 10; i++) {
//   let row = document.createElement('tr');
//   for (let j = 0; j < 10; j++) {
//     let cell = document.createElement('td');
//     cell.textContent = count++;

//     cell.setAttribute('contenteditable', 'true');

//     cell.style.border = '1px solid #5f0fdf';
//     cell.style.textAlign = 'center';

//     row.appendChild(cell);
//   }
//   tableWithNumbers.appendChild(row);
// }

// tableWithNumbers.style.borderCollapse = 'collapse';

// document.body.appendChild(tableWithNumbers);