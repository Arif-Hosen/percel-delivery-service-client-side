import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useContex';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Booking = () => {
    const { id } = useParams();
    const [singleService, setSingleService] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState({});
    const { user } = useAuth();
    const initialInfo = { customer: user?.displayName, email: user?.email, address: '', service: singleService?.name, serviceId: singleService?._id }

    const [bookInfo, setBookInfo] = useState({});



    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const info = { ...initialInfo }
        info[name] = value;
        setBookInfo(info);
        // console.log(info)
    }

    // get data
    fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))


    const handleOnSubmit = (e) => {
        e.preventDefault();
        // post booking
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);

                }
            })
    }


    return (
        <div style={{ backgroundColor: '#f4f6fb' }}>
            <Navigation></Navigation>
            <div className="row container mx-auto py-5">
                <div class="col col-lg-6 card border-0" >
                    <img src={singleService?.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{singleService?.name}</h5>
                        <h6>Cost ${singleService?.cost}</h6>
                        <p class="card-text">{singleService?.description}</p>

                    </div>
                </div>
                <div class="col col-lg-6 card border-0 mt-3" >
                    <form onSubmit={handleOnSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Name</label>
                            <input type="text"
                                disabled
                                value={user?.displayName}
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="text"
                                disabled
                                value={user?.email}
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Parcel Service</label>
                            <input type="text"
                                disabled
                                value={singleService?.name}
                                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Service Id</label>
                            <input type="text"
                                disabled
                                value={singleService?._id}
                                class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Address</label>
                            <input
                                onBlur={handleOnBlur}
                                type="text" name='address' class="form-control" />
                        </div>

                        <button type="submit" class="btn btn-warning">Place Book</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Booking;