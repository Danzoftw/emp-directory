import React, { createContext } from "react";

interface AppContextInterface {
  id?: number;
  age?: number;
  state?: any;
  DispatchUserEvent?: any;
  users?: any;
  setUsers?: any;
}

export const AppContext = createContext<AppContextInterface>({});
