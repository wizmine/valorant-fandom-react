import { useHttp } from "../hooks/http.hook";

const useValorantService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://valorant-api.com";

  const getAllAgents = async () => {
    const res = await request(`${_apiBase}/v1/agents`);

    return res.data.filter((agent) => agent.isPlayableCharacter).map(_transformAgent);
  };

  const getAgent = async (id = "7f94d92c-4234-0a36-9646-3a87eb8b5c89") => {
    const res = await request(`${_apiBase}/v1/agents/${id}`);
    return _transformAgent(res.data);
  };

  const getAllMaps = async () => {
    const res = await request(`${_apiBase}/v1/maps`);

    return res.data.map(_transformMap);
  };

  const getMap = async (id = "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319") => {
    const res = await request(`${_apiBase}/v1/maps/${id}`);

    return _transformMap(res.data);
  };

  const _transformAgent = (agent) => {
    return {
      name: agent.displayName,
      description: agent.description,
      agentIcon: agent.displayIcon,
      id: agent.uuid,
      isAgentActive: false,

      roleName: agent.role.displayName,
      roleDescription: agent.role.description,
      roleIcon: agent.role.displayIcon,

      firstAbilityName: agent.abilities[0].displayName,
      firstAbilityDescription: agent.abilities[0].description,
      firstAbilityIcon: agent.abilities[0].displayIcon,

      secondAbilityName: agent.abilities[1].displayName,
      secondAbilityDescription: agent.abilities[1].description,
      secondAbilityIcon: agent.abilities[1].displayIcon,

      thirdAbilityName: agent.abilities[2].displayName,
      thirdAbilityDescription: agent.abilities[2].description,
      thirdAbilityIcon: agent.abilities[2].displayIcon,

      ultimateAbilityName: agent.abilities[3].displayName,
      ultimateAbilityDescription: agent.abilities[3].description,
      ultimateAbilityIcon: agent.abilities[3].displayIcon,
    };
  };

  const _transformMap = (map) => {
    return {
      name: map.displayName,
      mapIcon: map.displayIcon,
      listMapIcon: map.listViewIcon,
      splashMapIcon: map.splash,
      id: map.uuid,
    };
  };

  return {
    loading,
    error,
    clearError,
    getAllAgents,
    getAgent,
    getAllMaps,
    getMap,
  };
};

export default useValorantService;
