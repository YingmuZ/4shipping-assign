import React from "react";
import { Link } from "react-router-dom";
import { useGetEmptyVesselsQuery } from "../services/vesselsApi";
import "../App.css"

const EmptyVessels = () => {
  const { data: vessels, isFetching } = useGetEmptyVesselsQuery();
  if (isFetching) return "Loading...";
  const data = vessels.data;

  console.log(data);

  return (
    <div className="body">
      <h3 className="title">List of Empty Vessels</h3>

      <ul>
        {data.map((item) => (
          <div>
            <Link to={`/${item.relationships.vessel.data.id}`}>
              <div className="vessels-box" key={item.id}>{item.attributes.customPlace}</div>
            </Link>
            <div>
              <p>expired at {item.attributes.emptyExpiresAt}</p>
            </div>
          </div>
        ))}
      </ul>

    </div>
  );
};

export default EmptyVessels;




// data.included.find(resource => resource.type == 'vessels' && resource.id == item.id)
