import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { AppContext } from "../../context/context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./stylesheet/operations.css";

const EditUser = () => {
  const { users } = useContext(AppContext);
  let navigate = useNavigate();
  let { id } = useParams();
  let value = parseInt(id!);
  const { dispatchUserEvent } = useContext(AppContext);
  const [name, setName] = useState<string | undefined>();
  const [age, setAge] = useState<number | undefined>();
  const [bio, setBio] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
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

  useEffect(() => {
    const {
      name,
      age,
      bio,
    }: { id: number; name: string; age: number; bio: string } = filteredData[0];

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

  const maxLengthCheck = (object: any) => {
    const value = Math.max(min, Math.min(max, Number(object.target.value)));
    setNumValue(value);
  };

  return (
    <section className="add-user edit-user">
      <div className="container">
        <div className="title text-center">
          <h3 className="mb-0">Edit User</h3>
        </div>
        <div className="row flex-column align-items-center py-4">
          <div className="col-12 col-sm-8 col-lg-4">
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
              <div className="p-3 text-center">
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
    </section>
  );
};

export default EditUser;
