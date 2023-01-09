import React, { useContext, useState } from "react";
import { InputContext } from "../App";

export default function Header() {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="bg-gradient-to-r from-[#1488cc] to-[#2b32b2] ">
      <div className="container mx-auto py-8">
        <h1 className="text-center text-4xl font-bold text-white">
          English Dictionary App
        </h1>
        <p className="mt-5 mb-10 text-center text-lg text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ratione
          ab repellendus totam amet nostrum repudiandae laudantium ad provident.
          Voluptate harum quis sunt suscipit, omnis maxime similique quae veniam
          quia.
        </p>
        <div className="mt-5 flex items-center justify-center">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input-bordered input"
                onChange={handleInput}
                value={value}
              />
              <button
                className="btn-secondary btn-square btn"
                onClick={handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
