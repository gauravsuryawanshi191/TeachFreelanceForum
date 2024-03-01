import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import axios from 'axios';

const Contact = () => {
  const [yourName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/Contact/add', { yourName, email, mobileNumber, message });
      console.log(response.data);
      alert('Thank you for your message!');
      setName('');
      setEmail('');
      setMobileNumber('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Sorry, something went wrong. Please try again later.');
    }
  };
  
  return (
    <section >
      <div className='pt-2 text-center mb-1 ps-0 pb-0'>
        <img
          src='/Assets/Images/ContactPage/banner.jpg'
          alt='banner-img'
          className='mw-100'
        />
      </div>
      <section className=' p-1 text-center mb-2 ps-5 pe-5'>
        <section className='text-center'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Our Mission</h4>
              <p style={{ textAlign: "justify" }}><h5>
                Our Mission is to provide a one-stop solution
                  that bridges the gap between institutes and freelancers.</h5>
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Get in Touch</h4>

              <table style={{ textAlign: "left" }}>
                <tbody>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-phone fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div>
                        +91-8160650031 <br /> +91-8888683669 <br/> +91-9975266596
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-location-dot fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <p className='pt-2'>
                      TeachFreelance Forum, C-DAC ACTS, C-DAC Innovation Park, Panchavati, Pashan, Pune - 411008
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-envelope-open-text fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <a href='freelance_project@gmail.com'>
                        teachfreelanceforum@gmail.com
                      </a>
                      <br />
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Write to Us</h4>

              <form onSubmit={handleSubmit}>
                <div className='material-textfield mb-3'>
                  <input className='input form-control' placeholder=' ' type='text' value={yourName} onChange={handleNameChange} />                                  
                <label className='label'>Your Name</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='email' value={email} onChange={handleEmailChange}
                  />
                  <label className='label'>Email Id</label>
                </div>

                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text' value={mobileNumber} onChange={handleMobileNumberChange}
                  />
                  <label className='label'>Mobile Number</label>
                </div>

                <div className='material-textfield mb-3 '>
                  <textarea
                    className='input form-control'
                    placeholder=' '
                    type='text' value={message} onChange={handleMessageChange}
                    rows='3'
                  ></textarea>
                  <label className='label'>Your Message</label>
                </div>
                <div className='d-grid gap-3'>
                  <button
                    className='btn btn-success rounded-pill'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <img
                src='./Assets/Images/ContactPage/write.jpg'
                height='340px'
                alt=''
                className=' '
              />
            </div>
          </div>
        </section>
      </section>

      <div className='pb-2'>
        <iframe
          title='Location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.856499781422!2d73.80852827579716!3d18.535385768720335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1708083902141!5m2!1sen!2sin"
          width='100%'
          height='350'
          style={{ border: "0" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </section>
  );

}
  export default Contact;
