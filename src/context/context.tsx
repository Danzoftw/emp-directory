import React, { createContext } from "react";

interface AppContextInterface {
  id?: number;
  age?: number;
  state?: any;
  dispatchUserEvent?: any;
  users?: any;
  setUsers?: any;
}

export const AppContext = createContext<AppContextInterface>({});
