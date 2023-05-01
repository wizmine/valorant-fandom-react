import useValorantService from "../../services/ValorantService";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import img from "../errorMessage/error.gif";

import "./mapInfo.scss";

const MapInfo = (props) => {
  const { loading, error } = useValorantService();

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View map={props.selectedMap} /> : null;

  return (
    <div className="block">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ map }) => {
  const { name, mapIcon, splashMapIcon } = map;

  let imgStyle = mapIcon;

  if (imgStyle === null) {
    imgStyle = img;
  }

  return (
    <div className="introduction">
      <img className="map-img" src={splashMapIcon} alt={name} />
      <h2>{name}</h2>
      <img className="map-img-top" src={imgStyle} alt={name} />
    </div>
  );
};

export default MapInfo;
