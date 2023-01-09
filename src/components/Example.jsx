import React from "react";

export default function Example({ mean }) {
  return (
    <div className="card mx-auto mt-5 w-96 columns-2 bg-base-100 text-slate-600 shadow-xl">
      <div className="card-body">
        {mean.map((e) =>
          e.meanings.map((means) =>
            means.definitions.map((def) => (
              <div key={def.example}>
                <ol className="list-none">
                  <li>{def.example}</li>
                  <hr />
                </ol>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
}
