import React, { useState } from "react";
import Filters from "../Filters/Filters";
import "./stylesheet/search.css";

import AlphabetSearch from "../AlphabetSearch/AlphabetSearch";
import KeySearch from "../KeySearch/KeySearch";
import Employees from "../Employees/Employees";

const Search = () => {
  return (
    <section className="search-section px-0 px-lg-5">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-0 col-sm-2">
            <Filters />
          </div>
          <div className="col-12 col-sm-10">
            <AlphabetSearch />
            <KeySearch />
            <Employees />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
