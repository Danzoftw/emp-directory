import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import User from "./User";

const UserList = () => {
  const { users } = useContext(AppContext);
  return (
    <div className="available-users">
      <div className="titl">
        <h3>Available Students</h3>
      </div>
      <div className="user-list-data">
        <div className="container">
          <div className="row">
            {users.map((user: { id: React.Key | null | undefined }) => (
              <div className="col-4 py-2">
                <User key={user.id} user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="edit-user"></div>
    </div>
  );
};

export default UserList;
