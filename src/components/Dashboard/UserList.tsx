import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import "./stylesheet/user.css";

import { Suspense, lazy } from "react";
const User = lazy(() => import("./User"));

const UserList = () => {
  const { users } = useContext(AppContext);
  return (
    <section className="user-list">
      <div className="title text-center">
        <h3>Available Students</h3>
      </div>
      <div className="user-list-data">
        <div className="container">
          <div className="row">
            {users.map((user: { id: React.Key | null | undefined }) => (
              <div className="col-6 col-lg-4 py-2">
                <Suspense fallback={<div>Loading...</div>}>
                  <User key={user.id} user={user} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="edit-user"></div>
    </section>
  );
};

export default UserList;
