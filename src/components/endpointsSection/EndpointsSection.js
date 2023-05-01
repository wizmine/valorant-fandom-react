import { NavLink } from "react-router-dom";
import "./endpointsSection.scss";

const EndpointsSection = () => {
  return (
    <div className="endpoints">
      <h2>ENDPOINTS</h2>
      <ul className="endpoints-selector">
        <li className="endpoints-selector-agents">
          <NavLink
            exact
            activeStyle={{
              color: "rgb(255, 0, 85)",
            }}
            to="/"
          >
            AGENTS
          </NavLink>
        </li>
        <li className="endpoints-selector-maps">
          <NavLink
            exact
            activeStyle={{
              color: "rgb(255, 0, 85)",
            }}
            to="/map"
          >
            MAPS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default EndpointsSection;
