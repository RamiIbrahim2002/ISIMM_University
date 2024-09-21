import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/api/student')
    .then(response => response.data);
}

export function deleteStudent(id) {
  return axios.delete(`http://127.0.0.1:8000/api/student/`+ id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.data);
}

export function addStudent(student) {
  return axios.post('http://127.0.0.1:8000/api/student/', {
    first_name: student.first_name.value,
    last_name: student.last_name.value,
    age: student.Age.value,
    birthdate: student.Birthdate.value,
    email: student.Email.value,
    address: student.Address.value,
    course: student.Course.value,
  })
    .then(response => response.data);
}
