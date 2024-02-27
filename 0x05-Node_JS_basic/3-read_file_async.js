const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        let totalStudents = 0;
        let fields = {};

        lines.forEach((line, index) => {
          if (index !== 0) {
            const [firstName, age, field] = line.split(',');

            if (firstName && age && field) {
              totalStudents++;

              if (!fields[field]) {
                fields[field] = [];
              }

              fields[field].push(firstName);
            }
          }
        });

        console.log(`Number of students: ${totalStudents}`);

        Object.keys(fields).forEach((key) => {
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        });

        resolve();
      }
    });
  });
};

module.exports = countStudents;