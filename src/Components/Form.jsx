import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className='cta-form justify-content-center py-10 my-10'>
        <div className='container'>
          <div className='row text-center'>
            <h2>This is our services</h2>
            <p className='w-75 m-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae ut quis
              reprehenderit sint. Nostrum itaque earum dolores tenetur quasi, quae sint dolor,
              cupiditate error eveniet illum, adipisci explicabo eum!
            </p>
          </div>

          {/* Form */}

          <form action='' className='row py-5 g-3'>
            <div className='col-md-3'>
              <input type='text' className='form-control' placeholder='First Name' />
            </div>
            <div className='col-md-3'>
              <input type='text' className='form-control' placeholder='Last Name' />
            </div>
            <div className='col-md-3'>
              <input type='email' className='form-control' placeholder='Email' />
            </div>
            <div className='col-md-3'>
              <input type='number' className='form-control' placeholder='Phone No' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
