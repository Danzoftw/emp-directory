import React, { useState, useContext, useEffect } from "react";
import "./stylesheet/filters.css";
import { AppContext } from "../../context/context";

const Filters = () => {
  const { DispatchUserEvent } = useContext(AppContext);

  const { employee } = useContext(AppContext);

  //Getting Department, Offices & Job titles Details
  const department = employee.map((item: any) => item.department);
  const offices = employee.map((item: any) => item.office);
  const jobTitles = employee.map((item: any) => item.jobTitle);
  //Getting unique Department, Offices & Job titles Details

  let Departmentcount = {} as any;
  let officeCount = {} as any;
  let jobTitlesCount = {} as any;

  department.forEach(function (i: any) {
    Departmentcount[i] = (Departmentcount[i] || 0) + 1;
  });

  offices.forEach(function (i: any) {
    officeCount[i] = (officeCount[i] || 0) + 1;
  });

  jobTitles.forEach(function (i: any) {
    jobTitlesCount[i] = (jobTitlesCount[i] || 0) + 1;
  });

  const UniqueDepartment = [...new Set<any>(department)];
  const UniqueOffices = [...new Set<any>(offices)];
  const UniquejobTitles = [...new Set<any>(jobTitles)];
  const handleFilterSubmit = (e: any) => {
    const filterOption = e.target.id;
    const MainDepartment = e.target.getAttribute("data-name");

    const newarr = {
      filterOption: filterOption,
      MainDepartment: MainDepartment,
    };
    DispatchUserEvent("USER_FILTER_OPTION_SELECT", { state: newarr });
  };

  return (
    <section className="filters">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="department-outer">
              <div className="departments pb-4">
                <h6 className="p-1">Departments</h6>
                <ul className="list-group p-1">
                  {UniqueDepartment.map((item: any) => (
                    <>
                      <div className="d-flex pb-2">
                        <li
                          data-name="Department"
                          id={item}
                          className="cursor-pointer"
                          onClick={handleFilterSubmit}
                        >
                          {item}
                        </li>
                        <li className="ms-2">({Departmentcount[item]})</li>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
              <div className="offices pb-4">
                <h6 className="p-1">Offices</h6>
                <ul className="list-group p-1">
                  {UniqueOffices.map((item: any) => (
                    <>
                      <div className="d-flex pb-2">
                        <li
                          data-name="Offices"
                          id={item}
                          className="cursor-pointer"
                          onClick={handleFilterSubmit}
                        >
                          {item}
                        </li>
                        <li className="ms-2">({officeCount[item]})</li>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
              <div className="job-titles">
                <h6 className="p-1">Job Titles</h6>
                <ul className="list-group p-1">
                  {UniquejobTitles.map((item: any) => (
                    <>
                      <div className="d-flex pb-2">
                        <li
                          data-name="jobTitles"
                          id={item}
                          className="cursor-pointer"
                          onClick={handleFilterSubmit}
                        >
                          {item}
                        </li>
                        <li className="ms-2">({jobTitlesCount[item]})</li>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
