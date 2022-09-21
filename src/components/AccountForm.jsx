import React from "react";
import { cellChurches } from "./utils/church-constants";

const AccountForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select className="form-select">
          <option value="" hidden>
            Choose Income or Expenditure
          </option>
          <option>Income</option>
          <option>Expenditure</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cell">Cell Church</label>
        <select name="cell" className="form-select">
          <option value="" hidden></option>
          {cellChurches.map((cell, i) => (
            <option key={i}>{cell}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default AccountForm;
