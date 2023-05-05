import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetVesselDetailsQuery} from "../services/vesselsApi";
import ContactCard from "./ContactCard";




const VesselDetails = () => {
  // get the id
  const { id } = useParams();
  const { data: certainVessel, isFetching } = useGetVesselDetailsQuery(id);
  if (isFetching) return "loading";
  const data = certainVessel.data;
  // console.log(data);


  return (
    <div className="body">
      <h3 className="title">More details as follows:</h3>
      <div className="detail-content">
      <p>Vessel Length: {data.attributes.length}</p>
      <p>Vessel Tonnage: {data.attributes.tonnage}</p>
      <p>Skipper Name: {data.attributes.skipperName}</p>
      <p>Contact Email: {data.attributes.email}</p>
        <ContactCard />
    </div>
    </div>
  );
};

export default VesselDetails;
