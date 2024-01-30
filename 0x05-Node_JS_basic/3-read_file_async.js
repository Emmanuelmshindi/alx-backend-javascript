const fs = require('fs');

async function countStudents(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');

    const students = data
      .trim()
      .split('\n')
      .map(line => line.split(','))
      .filter(fields => fields.length == 4);

    const fieldCounts = {};
    students.forEach(student => {
      const field = student[3];
      if (fieldCounts[field]) {
        fieldCounts[field]++;
      } else {
        fieldCounts[field] = 1;
      }
    });
    console.log(`Number of students: ${students.length}`);
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${getStudentList(students, field)}`);
    }
  } catch (error){
    throw new Error('Cannot load the database');
  }
};

function getStudentList(students, field) {
  const filteredStudents = students.filter(student => student[3] === field);
  const names = filteredStudents.map(student => student[0]);
  return names.join(', ');
}

module.exports = countStudents;
