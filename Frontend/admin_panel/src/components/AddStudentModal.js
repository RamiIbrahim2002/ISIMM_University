import React, { useState, useEffect } from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { getDepartments } from '../services/DepartmentServices';
import { addStudent } from '../services/StudentServices';

const AddStudentModal = (props) => {


  const handleSubmit = (e) => {
    console.log(e.target)   
    e.preventDefault();
    addStudent(e.target)
      .then((result) => {
        alert(result);
        props.setUpdated(true);
      })
      .catch((error) => {
        alert("Failed to Add Student");
      });
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill In Student Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="first_name" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="last_name" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="Age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="Age" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="Birthdate">
                  <Form.Label>Birthdate</Form.Label>
                  <Form.Control type="date" name="Birthdate" required />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="Email" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" name="Address" placeholder="" />
                </Form.Group>
                <Form.Group controlId="Course">
                  <Form.Label>Course</Form.Label>
                  <Form.Control type="text" name="Course" required placeholder="" />
                </Form.Group>
                  
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudentModal;
