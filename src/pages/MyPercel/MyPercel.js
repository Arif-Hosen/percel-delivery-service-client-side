import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useContex';

const MyPercel = () => {

    const [parcel, setParcel] = useState([]);
    const [myParcel, setMyParcel] = useState([]);
    // get user from useAuth by contex api
    const { user } = useAuth();
    // getting data from booking collection
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setParcel(data))
    }, [])
    // if collection email of db and login user email is same then user can be my booking . filter data and set an state
    useEffect(() => {
        const myBook = parcel.filter(pack => pack?.email == user?.email);
        setMyParcel(myBook);
    }, [parcel])

    // delete api
    const handleDelete = (id) => {

        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // after data load ,we get deletedCount property from server response
                if (data.deletedCount > 0) {
                    alert('Are you sure you wish to cancel booking ???')
                    // condition check if clicked data's id didn't match mypakages id, it will be added myParcel state
                    const remaining = myParcel.filter(user => user._id !== id);
                    setMyParcel(remaining);

                }
            })

    }


    return (
        <div>

            <div className='my-booking mt-5 pt-5 p-4 '>

                <table className="table">
                    <thead>
                        <tr className='my-table-head'>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Service Id</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myParcel.map(singlePack => <tr className='my-table-data'>
                                <td>{singlePack._id}</td>
                                <td>{singlePack.user}</td>
                                <td>{singlePack.name}</td>
                                <td>{singlePack.id}</td>
                                <td>{singlePack.email}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(singlePack._id)}>Cancel Booking</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default MyPercel;