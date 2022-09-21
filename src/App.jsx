import React, { useState } from "react";
import "./styles/custom.scss";
import "./styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { membersData } from "./utils/members.data";
const App = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="app">
      <div className="container">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="search"
          placeholder="search any member by name..."
          className="form-control mt-5"
        />
      </div>

      <ul className="mt-5">
        {membersData
          .filter(
            (m) =>
              m.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
              m.lastName.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((member) => (
            <li key={member.id}>
              {member.firstName} {member.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
