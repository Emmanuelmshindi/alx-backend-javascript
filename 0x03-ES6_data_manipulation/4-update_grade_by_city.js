export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
  });
}
