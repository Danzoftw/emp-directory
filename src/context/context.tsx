import React, { createContext } from "react";

interface AppContextInterface {
  id?: number;
  age?: number;
  name?: string;
  DispatchUserEvent?: any;
  employee?: any;
  registrations?: any;
  setUsers?: any;
  state?: boolean;
  filterInput?: any;
  userAlphabet?: any;
  userPref?: string;
  filterSelect?: any;
  toggler?: boolean;
  count?: any;
}

export const AppContext = createContext<AppContextInterface>({});
