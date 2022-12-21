import React, { useState } from "react";
import "./stylesheet/index.css";
import AddUser from "./components/Operations/AddUser";
import EditUser from "./components/Operations/EditUser";
import UserList from "./components/Dashboard/UserList";
// import Filter from "./components/Filter/Filter";
import { AppContext } from "./context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import UseLocalStorage from "./components/LocalStorage/UseLocalStorage";

function App() {
  const [users, setUsers] = UseLocalStorage("students", []);

  const DispatchUserEvent = (actionType: any, payload: any) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUsers(
          users.filter((user: { id: any }) => user.id !== payload.userId)
        );
        return;
      case "EDIT_USER":
        setUsers(
          users.map((obj: { id: any }) => {
            if (obj.id === payload.editedUser.id) {
              return {
                ...obj,
                name: payload.editedUser.name,
                age: payload.editedUser.age,
                bio: payload.editedUser.bio,
              };
            }
            return obj;
          })
        );
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ users, setUsers, DispatchUserEvent }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="/userlist/" element={<UserList />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
