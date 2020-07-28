import React from "react";

const Context = React.createContext({
  email: "",
  handleSetEmail: () => {},
});

export default Context;
