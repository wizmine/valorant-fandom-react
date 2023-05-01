import useValorantService from "../../services/ValorantService";
import { useState } from "react";

import AgentFilter from "../filters/AgentFilter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./agentList.scss";

const AgentList = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const { loading, error } = useValorantService();

  const searchAgent = (agents, value) => {
    if (value.length === 0) {
      return agents;
    }

    return agents.filter((agent) => {
      return agent.name.indexOf(value) > -1;
    });
  };

  const onUpdateSearch = (value) => {
    setSearchValue(value);
  };

  const handleClick = (id) => {
    props.agentList.map((item) => (item.isAgentActive = false));
    props.agentList[id].isAgentActive = true;
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li
          className={props.agentList[i].isAgentActive ? "agent agent-selected" : "agent"}
          key={i}
          onClick={() => {
            props.setSelectedAgent(item);
            props.setAbility(item.firstAbilityDescription);
            handleClick(i);
          }}
        >
          <img className="agent-img" src={item.agentIcon} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="role">
            <h3>{item.roleName}</h3>
            <img className="role-img" src={item.roleIcon} alt={item.roleName} />
          </div>
          <div className="abilities">
            <img className="ability" src={item.firstAbilityIcon} alt={item.AbilityName} />
            <img className="ability" src={item.secondAbilityIcon} alt={item.AbilityName} />
            <img className="ability" src={item.thirdAbilityIcon} alt={item.AbilityName} />
            <img
              className="ability"
              src={item.ultimateAbilityIcon}
              alt={item.ultimateAbilityName}
            />
          </div>
        </li>
      );
    });

    return <ul className="agent-grid">{items}</ul>;
  }

  const roleData =
    selectedRole === "All"
      ? props.agentList
      : props.agentList.filter((agent) => agent.roleName === selectedRole);

  const visibleData = searchAgent(roleData, searchValue);
  const items = renderItems(visibleData);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="agent-list">
      <AgentFilter
        onUpdateSearch={onUpdateSearch}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      {errorMessage}
      {spinner}
      {items}
    </div>
  );
};

export default AgentList;
