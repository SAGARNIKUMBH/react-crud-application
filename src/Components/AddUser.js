import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Id").required("Required"),
    phone: Yup.string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
        "Please provide valid phone number"
      )
      .required("Required"),
    website: Yup.string().required("Required"),
  });

  // const { name, username, email, phone, website } = user;
  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const onSubmit = async (values) => {
    // e.preventDefault();
    await axios.post("http://localhost:3003/users", values);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
              dirty,
            } = formik;
            return (
              <Form autoComplete="off">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control form-control-lg ${
                      errors.name && touched.name
                        ? "is-invalid"
                        : touched.name
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Enter Your Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </div>
                <div className="field-group">
                  {console.log(errors)}
                  <input
                    type="text"
                    className={`form-control form-control-lg ${
                      errors.username && touched.username
                        ? "is-invalid"
                        : touched.username
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Enter Your Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <span className="error">{errors.username}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control form-control-lg ${
                      errors.email && touched.email
                        ? "is-invalid"
                        : touched.email
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control form-control-lg ${
                      errors.phone && touched.phone
                        ? "is-invalid"
                        : touched.phone
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control form-control-lg ${
                      errors.website && touched.website
                        ? "is-invalid"
                        : touched.website
                        ? "is-valid"
                        : ""
                    }`}
                    placeholder="Enter Your Website Name"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    // handleBlur={handleBlur}
                  />
                  {errors.website && touched.website && (
                    <span className="error">{errors.website}</span>
                  )}
                </div>
                <br />
                <input
                  className="btn btn-primary "
                  type="reset"
                  value="Reset"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={!formik.isValid}
                >
                  Add User
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddUser;
