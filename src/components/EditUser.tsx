import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { AppContext } from "../context/context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  age: number;
  bio: string;
}

const EditUser = () => {
  const { users } = useContext(AppContext);
  let navigate = useNavigate();
  // const { token } = useParams<{token?: string}>();
  let { id } = useParams();
  let value = parseInt(id!);
  // console.log("userdata", userdata);
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState("");
  const [age, setAge] = React.useState<number | undefined>();
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const min = 1;
  const max = 100;
  const useData = () => {
    const user = { id: value, name, age, bio };
    dispatchUserEvent("EDIT_USER", { editedUser: user });
    navigate("/userlist");
  };

  const filteredData = users.filter(
    (user: { id: number | undefined }) => user.id === value
  );
  const [numValue, setNumValue] = useState(filteredData[0].age);
  // console.log("filteredData", filteredData[0]);
  useEffect(() => {
    // const ageStore = filteredData[0].age;
    // const {id, name, age, bio} : [...filteredData[0]];
    const {
      id,
      name,
      age,
      bio,
    }: { id: number; name: string; age: number; bio: string } = filteredData[0];

    // console.log("all filtered data", id, name, age, bio);
    setName(name);
    setAge(age);
    setBio(bio);
  }, []);

  const handleEditUser = (e: any) => {
    e.preventDefault();
    if (!name || !age || !bio) {
      setError("Filds cannot be empty");
    } else {
      useData();
    }
  };

  const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const newValue = e.target.value;
  };

  const maxLengthCheck = (object: any) => {
    const value = Math.max(min, Math.min(max, Number(object.target.value)));
    console.log("value", value);
    setNumValue(value);
  };

  return (
    <div>
      <div className="container">
        <h3>Edit User</h3>
        <div className="row flex-column align-items-center py-4">
          <div className="col-3">
            <div className="inner-row p-2">
              <div className="p-3">
                <input
                  className="form-control"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder={filteredData[0].name}
                />
              </div>
              <div className="p-3">
                <input
                  className="form-control"
                  required
                  type="number"
                  value={numValue}
                  onInput={maxLengthCheck}
                  // onChange={onAgeChange}
                  // placeholder={age}
                />
              </div>
              <div className="p-3">
                <textarea
                  className="form-control"
                  required
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  placeholder={filteredData[0].bio}
                />
              </div>
              {error && (
                <strong id="title-error" role="alert">
                  {error}
                </strong>
              )}
              <div className="p-3">
                <button
                  className="common-button-style-1"
                  onClick={handleEditUser}
                >
                  Edit student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
