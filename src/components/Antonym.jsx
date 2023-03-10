import React from "react";

export default function Antonym({ mean }) {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.antonyms?.map((ant) => <li>{ant}</li>);
          })
        )
      )}
    </div>
  );
}
