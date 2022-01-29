import React from "react";

const Field = ({ fields }) => {
  return (
    <div className="field">
      {/* {fields.map((row, rIndex) => {
        return row.map((column, cIndex) => {
          return (
            <dir key={`${rIndex}-${cIndex}`} className={`dots ${column}`}></dir>
          );
        });
      })} */}
      {fields.map((row) => {
        return row.map((column) => {
          return <div className={`dots ${column}`}></div>;
        });
      })}
    </div>
  );
};

export default Field;
