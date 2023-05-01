import MapList from "../mapList/MapList";
import MapInfo from "../mapInfo/MapInfo";

import useValorantService from "../../services/ValorantService";
import { useState, useEffect } from "react";

const MapPage = () => {
  const [mapList, setMapList] = useState([]);
  const [selectedMap, setSelectedMap] = useState({});

  const { getAllMaps, getMap } = useValorantService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (items) => {
    getAllMaps(items).then((mapList) => setMapList(mapList));
    getMap(items).then((selectedMap) => setSelectedMap(selectedMap));
  };

  return (
    <>
      <MapList mapList={mapList} setSelectedMap={setSelectedMap}/>
      <MapInfo selectedMap={selectedMap}/>
    </>
  );
};

export default MapPage;
