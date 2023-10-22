import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

function MyProvider({ children }) {
  const [valueToPass, setValueToPass] = useState("Hi from React");

  return (
    <MyContext.Provider value={valueToPass}>{children}</MyContext.Provider>
  );
}

function MainComponent() {
  return (
    <MyProvider>
      <CompOne />
    </MyProvider>
  );
}

function CompOne() {
  const value = useContext(MyContext);

  return (
    <div>
      <h1>CompOne</h1>
      <CompTwo />
    </div>
  );
}

function CompTwo() {
  return (
    <div>
      <h2>CompTwo</h2>
      <CompThree />
    </div>
  );
}

function CompThree() {
  const value = useContext(MyContext);

  return (
    <div>
      <h3>CompThree - Value: {value}</h3>
      <CompFour />
    </div>
  );
}

function CompFour() {
  return (
    <div>
      <h4>CompFour</h4>
      <CompFive />
    </div>
  );
}

function CompFive() {
  const value = useContext(MyContext);

  return (
    <div>
      <h5>CompFive - Value: {value}</h5>
    </div>
  );
}


export default MainComponent;