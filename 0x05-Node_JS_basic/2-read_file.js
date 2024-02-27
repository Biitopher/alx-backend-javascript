module.exports = countStudents;

const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  data = data.split('\n');
  let students = data.filter((student) => student);
  students = students.map((item) => item.split(','));

  const studentSize = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${studentSize}`);

  const fields = {};
  students.forEach((student, index) => {
    if (index !== 0) {
      const [firstName, age, field] = student;

      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }
  });

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`,
    );
  }
};
