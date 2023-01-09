import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Antonym from "./Antonym";
import Example from "./example";
import Meaning from "./Meaning";
import Synonym from "./Synonym";

export default function Result() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { inputValue } = useContext(InputContext);

  const resData = async (param) => {
    try {
      setLoading(true);
      const res = await axios.get(
        ` https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
      );
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      resData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <>
        <img
          src="/please be patient.png"
          alt=""
          width={800}
          height={800}
          className="mx-auto"
        />
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3 className="mt-10 text-center text-2xl font-semibold text-slate-500">
          I`m sorry can`t found your words🥲
        </h3>
        <img
          src="/file1.svg"
          alt=""
          width={800}
          height={800}
          className="mx-auto"
        />
      </>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl p-4">
      {inputValue && (
        <div className="card card-normal mx-auto w-96 bg-gradient-to-tr from-[#9fccfa] to-[#0974f1] text-slate-50 shadow-xl">
          <div className="card-body items-center text-center">
            <p className="text-lg uppercase">
              Result for: <span className="font-bold">{inputValue}</span>
            </p>
          </div>
        </div>
      )}
      {response && (
        <div>
          <h3 className="mt-5 text-center text-xl font-bold">
            Mean and Definisions
          </h3>
          <Meaning mean={response} />
          <h3 className="mt-5 text-center text-xl font-bold">Examples</h3>
          <Example mean={response} />
          <h3 className="mt-5 text-center text-xl font-bold">Synonym</h3>
          <Synonym mean={response} />
          <h3 className="mt-5 text-center text-xl font-bold">Antonym</h3>
          <Antonym mean={response} />
        </div>
      )}
    </div>
  );
}
