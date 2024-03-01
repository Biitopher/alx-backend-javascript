import fs from 'fs';

export const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const lines = data.trim().split('\n').slice(1); // assuming first line is header
                const studentsByField = {};
                lines.forEach(line => {
                    const [firstName, field] = line.split(',');
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstName);
                });
                resolve(studentsByField);
            }
        });
    });
};
