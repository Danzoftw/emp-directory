import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import "./stylesheet/user.css";
import { Suspense, lazy } from "react";
const User = lazy(() => import("./User"));
const UserList = () => {
  const [input, setInput] = useState("");
  const { users } = useContext(AppContext);
  let lowerCaseInput = input.toLocaleLowerCase();
  const filteredData = users.filter((item: any) =>
    item.name.toLowerCase().includes(lowerCaseInput)
  );
  return (
    <section className="user-list">
      <div className="title text-center">
        <h3>Available Students</h3>
      </div>

      <div className="user-list-data">
        <div className="container">
          <div className="search-outer">
            <div className="search-title d-inline">
              <p className="d-inline">Search Student</p>
            </div>
            <div className="search-input">
              <input
                className="outline-none"
                type="text"
                name="input"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            {filteredData.map((user: { id: React.Key | null | undefined }) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-lg-0 px-md-0 py-2">
                <Suspense fallback={<div>Loading...</div>}>
                  <User key={user.id} user={user} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
