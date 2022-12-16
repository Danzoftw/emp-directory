import React, { useState } from "react";
import "./stylesheet/Style.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/Dashboard/UserList";
import { AppContext } from "./context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [users, setUsers] = useLocalStorage("students", []);

  const dispatchUserEvent = (actionType: any, payload: any) => {
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
        const filteredData = users.find(
          (user: { id: any }) => user.id === payload.editedUser.id
        );
        console.log("filteredData", filteredData);

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
      <AppContext.Provider value={{ users, setUsers, dispatchUserEvent }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="/userlist/" element={<UserList />} />
            <Route path="/edit/:id" element={<EditUser />} />
            {/* <Route component={() => <Redirect to="/" />} /> */}
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
