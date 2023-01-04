import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { AppContext } from "../../context/context";

const EmployeeEditForm = (props: {
  handleSubmit: any;
  allValues: any;
  setAllValues: any;
}) => {
  const { handleSubmit, allValues, setAllValues } = props;

  //   console.log("allValues_REACHED", allValues);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="firstName mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            value={allValues?.firstName}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="firstName"
            type="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastName mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            value={allValues?.lastName}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="lastName"
            type="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="preferredName mb-3">
          <Form.Label>Preferred Name</Form.Label>
          <Form.Control
            required
            value={allValues?.preferredName}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="preferredName"
            type="text"
            placeholder="Preferred Name"
          />
        </div>
        <div className="email mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            value={allValues?.email}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="jobTitle mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            required
            value={allValues?.jobTitle}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="jobTitle"
            type="text"
            placeholder="Job Title"
          />
        </div>
        <div className="office mb-3">
          <Form.Label>Office</Form.Label>
          <Form.Control
            required
            value={allValues?.office}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="office"
            type="text"
            placeholder="Office"
          />
        </div>
        <div className="department mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            required
            value={allValues?.department}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="department"
            type="text"
            placeholder="Department"
          />
        </div>
        <div className="phoneNumber mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            value={allValues?.phoneNumber}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
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
            value={allValues?.skype}
            onChange={(e: any) =>
              setAllValues({ ...allValues, [e.target.name]: e.target.value })
            }
            name="skype"
            type="text"
            placeholder="Skype ID"
          />
        </div>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EmployeeEditForm;
