import Button from '@restart/ui/esm/Button';
import './Details.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {

    let{id} = useParams()

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    const [singleServices, setSingleServices] = useState({})

    useEffect(() => {
    
     const findDetails =details.find(services =>services.id===id)
        setSingleServices(findDetails)

    }, [details])
    return (
        <div className="details">
            <h1 className="pt-4 text-white mb-4">Services Details</h1>
            <h4 className="mb-3 text-warning">Service Name : {singleServices?.name}</h4>
            <img className="rounded shadow mb-3" src={singleServices?.img} alt="" />
            <p className="text-white">{singleServices?.discreption} </p>
            <Button className="btn btn-warning mb-4">More ></Button>

        </div>
    );
};

export default Details;