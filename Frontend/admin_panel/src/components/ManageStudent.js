import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../services/StudentServices';
import AddStudentModal from "./AddStudentModal";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }
    getStudents()
      .then(data => {
        if (mounted) {
          setStudents(data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch students:", error);
      });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, students]);

  const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, id) => {
    if (window.confirm('Are you sure?')) {
      e.preventDefault();
      deleteStudent(id)
        .then((result) => {
          alert(result);
          setIsUpdated(true);
        })
        .catch((error) => {
          alert("Failed to Delete Student");
        });
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firs_name</th>
              <th>Last_name</th>
              <th>Age</th>
              <th>Birthdate</th>
              <th>Email</th>
              <th>Address</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) =>
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.first_name}</td>
                <td>{stu.last_name}</td>
                <td>{stu.age}</td>
                <td>{stu.birthdate}</td>
                <td>{stu.email}</td>
                <td>{stu.address}</td>
                <td>{stu.course}</td>
                <td>
                  <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event, stu.id)}>
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event, stu)}>
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Student
          </Button>
          <AddStudentModal show={addModalShow} setUpdated={setIsUpdated} onHide={AddModelClose} />
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default ManageStudents;
