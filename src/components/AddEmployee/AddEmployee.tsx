import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import EmployeeForm from "../ReusableComponents/EmployeeForm";

const AddEmployee = () => {
  const { DispatchUserEvent } = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [office, setOffice] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skype, setSkype] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const employee = {
      id: Math.floor(1000 + Math.random() * 9000),
      firstName,
      lastName,
      preferredName,
      email,
      jobTitle,
      office,
      department,
      phoneNumber,
      skype,
    };

    DispatchUserEvent("ADD_EMPLOYEE", { state: employee });
  };
  return (
    <EmployeeForm
      handleSubmit={handleSubmit}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setPreferredName={setPreferredName}
      setEmail={setEmail}
      setJobTitle={setJobTitle}
      setOffice={setOffice}
      setDepartment={setDepartment}
      setPhoneNumber={setPhoneNumber}
      setSkype={setSkype}
    />
  );
};

export default AddEmployee;
