import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";

// context
export const InputContext = createContext();

export default function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div>
        <Header />
        <Result />
      </div>
    </InputContext.Provider>
  );
}
