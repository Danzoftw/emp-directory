import React, { useContext } from "react";
import "./stylesheet/alphasearch.css";
import { AppContext } from "../../context/context";
import USER_IMAGE from "../../images/user.png";

const AlphabetSearch = () => {
  const { DispatchUserEvent } = useContext(AppContext);

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const handleAlpha = (e: any) => {
    const alphabet = e.target.id;
    DispatchUserEvent("EMPLOYEE_ALPHABET", { state: alphabet });
  };

  const handleAllUserClick = () => {
    DispatchUserEvent("ADD_FILTER_KEY", { state: "" });
    DispatchUserEvent("EMPLOYEE_ALPHABET", { state: "" });
  };
  return (
    <div className="alphabets-container">
      <div className="container-fluid">
        <div className="d-inline-flex justify-content-end flex-column flex-xl-row w-100">
          <div className="user-logo text-center mx-auto mb-1">
            <span
              onClick={handleAllUserClick}
              className="theme bg-text-blue-1 color-white d-flex justify-content-center align-items-center"
            >
              <img src={USER_IMAGE} alt="" />
            </span>
          </div>
          <ul className="d-flex flex-wrap search-alphabets justify-content-center justify-content-xl-between ps-0 w-100">
            {alphabet.map((alphabets, i) => (
              <li
                id={alphabets}
                key={i}
                onClick={handleAlpha}
                className="list-style-none theme bg-text-blue-1 color-white d-flex align-items-center justify-content-center"
              >
                {alphabets}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlphabetSearch;
