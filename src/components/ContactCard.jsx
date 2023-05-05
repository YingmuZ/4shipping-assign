import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetContactCardQuery } from '../services/vesselsApi'

const ContactCard = () => {

    
    const { id } = useParams();
    const { data, isFetching } = useGetContactCardQuery(id);
    if (isFetching) return "Loading...";

    const pdf = URL.createObjectURL(data);
    console.log(pdf);

  return (
    <div>
        <a href={pdf} download>download</a>

    </div>
  )
}

export default ContactCard