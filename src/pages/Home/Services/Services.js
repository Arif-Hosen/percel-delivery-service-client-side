import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);

  fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  return (
    <div className="container my-5 py-5 ">
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto">
        {
          services.map(service => <div class="col">
            <div style={{ width: '300px', backgroundColor: '#f4f6fb' }} class="card  h-100 border-top-0 border-start-0">
              <img width='50%' height='180px' src={service.img} class="card-img-top " alt="..." />
              <div class="card-body ">
                <h5 style={{ color: '#0b1e70' }} class="card-title">{service.name}</h5>
                <h6 style={{ color: '#ed4c21' }}>${service.cost}</h6>
                <p style={{ color: '#3d4f5f' }} class="card-text">{service.description}</p>
              </div>
              <Link to={`/services/${service?._id}`}>
                <button style={{ fontWeight: 'bold' }} className='btn btn-warning w-100'>Book Now</button>
              </Link>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};
export default Services;