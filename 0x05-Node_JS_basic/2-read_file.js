const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    let totalStudents = 0;
    let mathStudents = 0;
    let CSStudents = 0;

    const mathList = [];
    const CSList = [];

    lines.forEach(line => {
      const [firstName, age, field] = line.split(',');

      if (firstName && age && field) {
        totalStudents++;

        if (field === 'Math') {
          mathStudents++;
          mathList.push(firstName);
        } else if (field === 'CS') {
          CSStudents++;
          CSList.push(firstName);
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in Math: ${mathStudents}. List: ${mathList.join(', ')}`);
    console.log(`Number of students in CS: ${CSStudents}. List: ${CSList.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
  }:x

}

module.exports = countStudents;