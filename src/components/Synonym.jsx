import React from "react";

export default function Synonym({ mean }) {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => {
            return def.synonyms?.map((syn) => (
              <li key={def.synonyms}>{syn}</li>
            ));
          })
        )
      )}
    </div>
  );
}
