import AgentList from "../agentList/AgentList";
import AgentInfo from "../agentInfo/AgentInfo";

import useValorantService from "../../services/ValorantService";
import { useState, useEffect } from "react";

const AgentPage = () => {
  const [agentList, setAgentList] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState({});
  const [ability, setAbility] = useState([]);

  const { getAllAgents, getAgent } = useValorantService();

  console.log(agentList.filter((agent) => agent.roleName === 'Duelist'));

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (items) => {
    getAllAgents(items).then((agentList) => setAgentList(agentList));
    getAgent(items).then((selectedAgent) => setSelectedAgent(selectedAgent));
    getAgent(items).then((ability) => setAbility(ability.firstAbilityDescription));
  };

  return (
    <>
      <AgentList
        agentList={agentList}
        setSelectedAgent={setSelectedAgent}
        setAbility={setAbility}
      />
      <AgentInfo selectedAgent={selectedAgent} ability={ability} setAbility={setAbility} />
    </>
  );
};

export default AgentPage;
