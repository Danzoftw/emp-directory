import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { AppContext } from "../../context/context";

const EmployeeForm = (props: {
  handleSubmit: any;
  setFirstName: any;
  setLastName: any;
  setPreferredName: any;
  setEmail: any;
  setJobTitle: any;
  setOffice: any;
  setDepartment: any;
  setPhoneNumber: any;
  setSkype: any;
  id: number;
}) => {
  const {
    handleSubmit,
    setFirstName,
    setLastName,
    setPreferredName,
    setEmail,
    setJobTitle,
    setOffice,
    setDepartment,
    setPhoneNumber,
    setSkype,
    id,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="firstName mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setFirstName(e.target.value)}
            name="firstName"
            type="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastName mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setLastName(e.target.value)}
            name="lastName"
            type="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="preferredName mb-3">
          <Form.Label>Preferred Name</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setPreferredName(e.target.value)}
            name="lastName"
            type="text"
            placeholder="Preferred Name"
          />
        </div>
        <div className="email mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </div>
        <div className="jobTitle mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setJobTitle(e.target.value)}
            name="jobTitle"
            type="text"
            placeholder="Job Title"
          />
        </div>
        <div className="office mb-3">
          <Form.Label>Office</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setOffice(e.target.value)}
            name="office"
            type="text"
            placeholder="Office"
          />
        </div>
        <div className="department mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setDepartment(e.target.value)}
            name="department"
            type="text"
            placeholder="Department"
          />
        </div>
        <div className="phoneNumber mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            name="phoneNumber"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
          />
          <small>Format: xxxx-nnnnnn</small>
        </div>
        <div className="skype mb-3">
          <Form.Label>Skype</Form.Label>
          <Form.Control
            required
            onChange={(e: any) => setSkype(e.target.value)}
            name="skype"
            type="text"
            placeholder="Skype ID"
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EmployeeForm;
