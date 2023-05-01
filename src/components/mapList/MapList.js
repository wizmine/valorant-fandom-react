import useValorantService from "../../services/ValorantService";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./mapList.scss";

const MapList = (props) => {
  const { loading, error } = useValorantService();

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li
          className="map"
          key={i}
          onClick={() => {
            props.setSelectedMap(item);
          }}
        >
          <div
            className="map-list-block"
            style={{ background: `url(${item.listMapIcon}) center center` }}
          >
            <h2>{item.name}</h2>
          </div>
        </li>
      );
    });

    return <ul className="map-grid">{items}</ul>;
  }

  const items = renderItems(props.mapList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div>
      {errorMessage}
      {spinner}
      {items}
    </div>
  );
};

export default MapList;
