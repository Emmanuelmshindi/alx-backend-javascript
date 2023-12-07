export default function getStudentIdsSum(list) {
  const totalIds = list.reduce((total, student) => {
    return total += student.id;
  }, 0);
  return totalIds;
}
