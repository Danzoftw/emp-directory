import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/context";
import Button from "react-bootstrap/Button";
import EmployeeList from "./EmployeeList";
import Card from "react-bootstrap/Card";
import "./stylesheet/employees.css";

const Employees = () => {
  const {
    employee,
    filterInput,
    userAlphabet,
    userPref,
    filterSelect,
    toggler,
  } = useContext(AppContext);

  const [state, setState] = useState(false);

  const userFilterSelect = filterSelect.filterOption.toLowerCase();

  const LowerFilterInput = filterInput.toLowerCase();
  const LowerUserAlphabet = userAlphabet.toLowerCase();

  let wordAlphabetToggler = LowerFilterInput
    ? LowerFilterInput
    : LowerUserAlphabet;

  const selectMainDepartment =
    filterSelect?.MainDepartment === "Department"
      ? "department"
      : filterSelect.MainDepartment === "Offices"
      ? "office"
      : filterSelect.MainDepartment === "jobTitles"
      ? "jobTitle"
      : "jobTitle";

  const userSelectionToggler =
    userPref === "Preferred Name"
      ? "firstName"
      : userPref === "Preferred Department"
      ? "department"
      : userPref === "Preferred Office"
      ? "office"
      : userPref === "Preferred Job Title"
      ? "jobTitle"
      : "jobTitle";

  const filteredDataMain = employee?.filter((emp: any) =>
    emp?.[selectMainDepartment].toLowerCase().includes(userFilterSelect)
  );

  const filteredData = employee?.filter((emp: any) =>
    emp?.[userSelectionToggler].toLowerCase().includes(wordAlphabetToggler)
  );

  const departmentToggler = toggler ? filteredData : filteredDataMain;

  useEffect(() => {
    filteredData.length === 0 ? setState(true) : setState(false);
  }, [filteredData]);

  return (
    <section className="employees container-fluid py-5 h-100">
      <div className="employees-inner-container h-100">
        <div className="h-100 p-xl-3">
          <div
            className={
              state
                ? "employees-not-found-error p-5 m-2 theme bg-color-gray-2 d-inline-block position-absolute"
                : "d-none"
            }
          >
            <h6>No result found</h6>
          </div>
          <div className="row p-2">
            {departmentToggler?.map(
              (employee: { id: React.Key | null | undefined }) => (
                <EmployeeList key={employee?.id} employeeDisp={employee} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employees;
