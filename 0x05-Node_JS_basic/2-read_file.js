const fs = require('fs');

function getStudentList(students, field) {
  const filteredStudents = students.filter((student) => student[3] === field);
  const names = filteredStudents.map((student) => student[0]);
  return names.join(', ');
}

const countStudents = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');

    const students = data
      .trim()
      .split('\n')
      .map((line) => line.split(','))
      .filter((fields) => fields.length === 4);

    const fieldCounts = {};
    students.forEach((student) => {
      const field = student[3];
      if (fieldCounts[field]) {
        fieldCounts[field] += 1;
      } else {
        fieldCounts[field] = 1;
      }
    });
    console.log(`Number of students: ${students.length - 1}`);
    let isFirstIteration = true;
    for (const field in fieldCounts) {
      if (isFirstIteration) {
        isFirstIteration = false;
	continue;
      }
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getStudentList(students, field)}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
