import { useState } from "react";

import "./agentFilter.scss";

const AgentFilter = (props) => {
  const [localSearchValue, setLocalSearchValue] = useState("");

  const updateSearch = (e) => {
    const value = e.target.value;
    setLocalSearchValue(value);
    props.onUpdateSearch(value);
  };

  return (
    <div className="auxiliary">
      <div className="filter-agent-list">
        <label htmlFor="sort-select">Filter: </label>
        <select
          id="sort-select"
          value={props.selectedRole}
          onChange={(e) => props.setSelectedRole(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Duelist">Duelist</option>
          <option value="Initiator">Initiator</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
        </select>
      </div>
      <form className="search-agent-form">
        <label htmlFor="search"></label>
        <input
          alt="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={localSearchValue}
          onChange={updateSearch}
        ></input>
      </form>
    </div>
  );
};

export default AgentFilter;
