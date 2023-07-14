import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas/index";
import "./Form.scss";
import CustomButton from "../../common/Button/CustomButton";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values);
      action.resetForm();
    },
  });
  console.log("🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors", errors);

  return (
    <>
      <div className='cta-form justify-content-center'>
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

          <form onSubmit={handleSubmit} className='row py-5 g-5 justify-content-center'>
            <div className='col-md-3'>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
                name='first_name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className='text-danger'>{errors.first_name}</p>
              ) : null}
            </div>
            <div className='col-md-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                name='last_name'
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className='text-danger'>{errors.last_name}</p>
              ) : null}
            </div>
            <div className='col-md-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : null}
            </div>
            <div className='col-md-3'>
              <input
                type='number'
                name='number'
                className='form-control'
                placeholder='Phone No'
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number ? (
                <p className='text-danger'>{errors.number}</p>
              ) : null}
            </div>
            <div className='col-md-1'>
              <CustomButton buttonTitle='Submit' type='submit' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
