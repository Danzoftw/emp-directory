import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import EmployeeForm from "../ReusableComponents/EmployeeForm";
import EmployeeEditForm from "../ReusableComponents/EmployeeEditForm";

const EditEmployee = ({ id }: { id: number }) => {
  const { DispatchUserEvent } = useContext(AppContext);

  const [allValues, setAllValues] = useState({
    firstName: "",
    lastName: "",
    preferredName: "",
    email: "",
    office: "",
    department: "",
    skype: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    DispatchUserEvent("EDIT_EMPLOYEE", { state: allValues });
  };

  const { employee } = useContext(AppContext);

  const data = employee.filter((item: any) => item.id === id);
  const filteredUsers = data[0];

  useEffect(() => {
    setAllValues({ ...allValues, ...filteredUsers });
  }, []);

  return (
    <EmployeeEditForm
      handleSubmit={handleSubmit}
      allValues={allValues}
      setAllValues={setAllValues}
    />
  );
};

export default EditEmployee;
