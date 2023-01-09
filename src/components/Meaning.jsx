import React from "react";

export default function Meaning({ mean }) {
  return (
    <div className="card mx-auto mt-5 w-96 columns-2 bg-base-100 text-slate-600 shadow-xl">
      <div className="card-body">
        {mean.map((e) =>
          e.meanings.map((means) =>
            means.definitions.map((def) => {
              return (
                <div key={def.definition}>
                  <ul className="list-none">
                    <li>{def.definition}</li>
                    <hr />
                  </ul>
                </div>
              );
            })
          )
        )}
      </div>
    </div>
  );
}
