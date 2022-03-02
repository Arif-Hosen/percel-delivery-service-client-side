import React from 'react';

const Tracking = () => {
    return (

        <div className="row w-75 mx-auto p-3 border rounded" style={{ backgroundColor: ' #0b1e70', marginTop: '-30px' }}>
            <div class="col col-md-12 col-lg-4 mt-3">
                <input type="email" class="form-control" placeholder=" Your Email" aria-label="Email" />
            </div>
            <div class="col col-md-12 col-lg-4 mt-3">
                <input type="text" class="form-control" placeholder="Percel No" aria-label="Percel No" />

            </div>
            <div class="col mt-3">
                <button className="btn btn-warning w-100">Track</button>

            </div>

        </div>
    );
};

export default Tracking;