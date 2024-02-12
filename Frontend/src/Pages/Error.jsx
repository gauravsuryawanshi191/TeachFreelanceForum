import React from "react";

export default function Error() {
  return (
    <>
      <div className='px-4 pt-5 pb-5 text-center'>
        <h1 className='display-5 fw-bold'>
          We Are Currently Working <br /> On Our New Website
        </h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            Thank You For Being patient. We are doing Some Work on the Site and
            will be back Soon
          </p>
          <div className='input-group'>
            <input
              type='text'
              id='form3Example2'
              className='form-control'
              placeholder='Your Email Id'
            />
            <button className='btn btn-success' type='button'>
              Stay Tuned !!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
