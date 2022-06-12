import React from 'react';
import './App.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

function App() {
  return (
    <div className='container'>
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears</p>
      </div>
      <div className="magic-form">
        <Formik 
        initialValues={{
          name: "",
          email: "",
          agree: false,
          favoriteColor: "",
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().required("Please enter your name"),
            email: Yup.string().email("Don't forget to enter '@'").required("Please enter your email"),
            agree: Yup.boolean().required("Please agree with the conditions"),
            favoriteColor: Yup.string().required("Come on! Everyone has a favorite color").oneOf(["red","blue","green"])
          })
        }
        onSubmit={(values, {resetForm, setSubmitting}) => {
          console.log(values);
          setTimeout(()=>{
            resetForm();
          },1000)
        }}
        >

        {
          ({values, errors, handleChange, handleSubmit, handleReset, dirty, touched, isSubmitting}) => (
            <form className='magic-form' onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" className='input' id="name" placeholder='Kerem' value={values.name} onChange={handleChange} />
              {
                errors.name && touched.name && (
                  <div className='input-feedback'>
                    {errors.name}
                  </div>
                )
              }

              <label htmlFor="email">Email</label>
              <input type="email" className='input' id="email" placeholder='kerem@kerem.com' value={values.email} onChange={handleChange} />

              {
                errors.email && touched.email && (
                  <div className='input-feedback'>
                    {errors.email}
                  </div>
                )
              }

              <label htmlFor="favoriteColor">Favorite Color</label>
              <select id="favoriteColor" value={values.favoriteColor} onChange={handleChange}
              style={{
                marginTop: "10px",
                width: "150px",
                padding: "10px 15px",
                outline: "none"
              }}>
                <option value="" label='Pick a color'></option>
                <option value="red" label='Red'></option>
                <option value="blue" label='Blue'></option>
                <option value="green" label='Green'></option>
              </select>

              {
                errors.favoriteColor && touched.favoriteColor && (
                  <div className='input-feedback'>
                    {errors.favoriteColor}
                  </div>
                )
              }

              <div className="checkbox">
                <input type="checkbox" value={values.agree} id="agree" onChange={handleChange}/>
                <label htmlFor="agree" className='checkbox-label'>I agree with the terms and conditions</label>
              </div>

              <button type='submit' disabled={!dirty || isSubmitting}>Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
