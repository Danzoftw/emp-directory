import React, { useState, useEffect } from "react";
import { AppContext } from "./context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UseLocalStorage from "./components/LocalStorage/UseLocalStorage";

function App() {
  const [employee, setEmployee] = UseLocalStorage("employees", []);
  const [filterInput, setFilterInput] = useState("");
  const [userAlphabet, setUserAlphabet] = useState("");
  const [userPref, setUserPref] = useState("");
  const [filterSelect, setFilterSelect] = useState({
    filterOption: "",
    MainDepartment: "",
  });

  const [toggler, setToggler] = useState(false);

  const DispatchUserEvent = (actionType: any, payload: any) => {
    switch (actionType) {
      case "ADD_EMPLOYEE":
        const data = payload.state;
        setEmployee([...employee, data]);
        return;
      case "REMOVE_EMPLOYEE":
        setEmployee(
          employee.filter(
            (employee: { id: any }) => employee.id !== payload.userId
          )
        );
        return;
      case "EDIT_EMPLOYEE":
        console.log("edit payload", payload);
        setEmployee(
          employee.map((obj: { id: any }) => {
            if (obj.id === payload.state.id) {
              return {
                ...obj,
                firstName: payload.state.firstName,
                lastName: payload.state.lastName,
                preferredName: payload.state.preferredName,
                email: payload.state.email,
                jobTitle: payload.state.jobTitle,
                office: payload.state.office,
                department: payload.state.department,
                phoneNumber: payload.state.phoneNumber,
                skype: payload.state.skype,
              };
            }
            return obj;
          })
        );

        return;
      case "ADD_FILTER_KEY":
        const input = payload.state;
        setFilterInput(input);
        setToggler(true);
        return;
      case "EMPLOYEE_ALPHABET":
        const alphabet = payload.state.toLowerCase();
        setUserAlphabet(alphabet);
        setToggler(true);
        return;
      case "USER_DROP_SELECT":
        const preference = payload.state;
        setUserPref(preference);
        return;
      case "USER_FILTER_OPTION_SELECT":
        const filter = payload.state;
        setFilterSelect({
          ...filterSelect,
          filterOption: filter.filterOption,
          MainDepartment: filter.MainDepartment,
        });
        setToggler(false);
        return;

      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          DispatchUserEvent,
          employee,
          filterInput,
          userAlphabet,
          userPref,
          filterSelect,
          toggler,
        }}
      >
        <Header />
        <Search />
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
