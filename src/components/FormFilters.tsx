import React from "react";

function FormFilters() {
  return (
    <div className="flex gap-5 border border-slate-700 px-5 py-2 rounded-sm">
      <div>
        <input type="radio" />
        <label htmlFor="">All</label>
      </div>

      <div>
        <input type="radio" />
        <label htmlFor="">All</label>
      </div>
    </div>
  );
}

export default FormFilters;
