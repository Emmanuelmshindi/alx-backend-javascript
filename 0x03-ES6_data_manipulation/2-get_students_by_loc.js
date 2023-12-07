export default function getStudentsByLocation(list, city) {
  const sameCity = list.filter(student => {
	  return student.location === city;
  });
  return sameCity;
}
