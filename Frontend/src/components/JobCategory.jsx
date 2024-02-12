import React from "react";

export default function JobCategory() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container col-lg-6 col-md-6 col-xs-12 f-category'>
          <div class='row pt-4'>
            <div class='col text-center'>
              <h3>Browse Categories</h3>
              <p>Most Popular Categories of portal, sorted by Popularity</p>
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col text-center'>
              <button type='button' className='btn btn-success btn-circle'>
                <i className='fa-solid fa-car'></i>
              </button>
              <br />
              Driver
              <br />
              (0 Jobs)
            </div>
            <div className='col text-center'>
              <button type='button' className='btn btn-info btn-circle'>
                <i className='fa-solid fa-gears'></i>
              </button>
              <br />
              Mechanic
              <br />
              (0 Jobs)
            </div>
            <div className='col text-center'>
              <button type='button' className='btn btn-primary btn-circle'>
                <i className='fa-solid fa-paintbrush'></i>
              </button>
              <br />
              Painter
              <br />
              (0 Jobs)
            </div>
          </div>
          <div className='row pt-4 text-center'>
            <div className='col text-center'>
              <button type='button' className='btn btn-secondary btn-circle'>
                <i className='fa-solid fa-truck'></i>
              </button>
              <br />
              Delivery Boy
              <br />
              (0 Jobs)
            </div>
            <div className='col text-center'>
              <button type='button' className='btn btn-danger btn-circle'>
                <i className='fa-solid fa-building'></i>
              </button>
              <br />
              Workers
              <br />
              (0 Jobs)
            </div>
            <div className='col text-center'>
              <button type='button' className='btn btn-warning btn-circle'>
                <i className='fa-solid fa-headset'></i>
              </button>
              <br />
              Call Center
              <br />
              (0 Jobs)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
