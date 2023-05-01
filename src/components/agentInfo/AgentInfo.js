import useValorantService from "../../services/ValorantService";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./agentInfo.scss";

const AgentInfo = (props) => {
  const { loading, error } = useValorantService();

  function renderAgent(agent) {
    const {
      name,
      description,
      agentIcon,
      roleName,
      roleIcon,
      firstAbilityName,
      firstAbilityDescription,
      firstAbilityIcon,
      secondAbilityName,
      secondAbilityDescription,
      secondAbilityIcon,
      thirdAbilityName,
      thirdAbilityDescription,
      thirdAbilityIcon,
      ultimateAbilityName,
      ultimateAbilityDescription,
      ultimateAbilityIcon,
    } = agent;

    return (
      <>
        <div className="introduction">
          <img className="img" src={agentIcon} alt={name} />
          <h2>{name}</h2>
          <div className="introduction-role">
            <img className="introduction-role-img" src={roleIcon} alt={roleName} />
            <h3>{roleName}</h3>
          </div>
        </div>
        <div className="info">
          <div className="info-descr">{description}</div>
          <div className="info-abilities">
            <img
              className="info-ability"
              onClick={() => props.setAbility(firstAbilityDescription)}
              src={firstAbilityIcon}
              alt={firstAbilityName}
            />
            <img
              className="info-ability"
              onClick={() => props.setAbility(secondAbilityDescription)}
              src={secondAbilityIcon}
              alt={secondAbilityName}
            />
            <img
              className="info-ability"
              onClick={() => props.setAbility(thirdAbilityDescription)}
              src={thirdAbilityIcon}
              alt={thirdAbilityName}
            />
            <img
              className="info-ability"
              onClick={() => props.setAbility(ultimateAbilityDescription)}
              src={ultimateAbilityIcon}
              alt={ultimateAbilityName}
            />
          </div>
          <div className="info-ability-descr">{props.ability}</div>
        </div>
      </>
    );
  }

  const items = renderAgent(props.selectedAgent);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="block">
      {errorMessage}
      {spinner}
      {items}
    </div>
  );
};

export default AgentInfo;
