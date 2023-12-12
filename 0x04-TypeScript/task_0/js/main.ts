interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Jon',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student {
  firstName: 'Jane',
  lastName: 'Dee',
  age: 35,
  location: 'Hungary',
};

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table');
const headerRow = table.insertRow(0);

for const (key on student1) {
  const headerCell = document.createElement('th');
  headerCell.textContent = key;
  headerRow.appendChild(headerCell);
}

studentsList.forEach((student) => {
  const row = table.insertRow();
  for (const key in student) {
    const cell = row.insertCell();
    cell.textContent = student[key].toString();
  }
});
