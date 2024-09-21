import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/StudentServices'; // Assume you have a service for fetching student data
import "../App.css";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let mounted = true;
    getStudents()
      .then(data => {
        if (mounted) {
          setStudents(data);
        }
      })
    return () => mounted = false;
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row" >
        <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Birthdate</th>
              <th>Email</th>
              <th>Address</th>
              <th>Enrolled Date</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) =>
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.firs_name}</td>
                <td>{stu.last_name}</td>
                <td>{stu.age}</td>
                <td>{stu.birthdate}</td>
                <td>{stu.email}</td>
                <td>{stu.address}</td>
                <td>{stu.enrolled_date}</td>
                <td>{stu.course}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Student;
