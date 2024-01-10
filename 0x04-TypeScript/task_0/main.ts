interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const headerCell1 = headerRow.insertCell();
  const headerCell2 = headerRow.insertCell();
  headerCell1.textContent = 'First Name';
  headerCell2.textContent = 'Location';

  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();
