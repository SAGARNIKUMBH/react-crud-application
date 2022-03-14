import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),

    email: Yup.string().email("Invalid Email Id").required("Required"),
    phone: Yup.string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
        "Please provide valid phone number"
      )
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", e);
    e.push("/");
  };

  return (
    <div className="contact3 py-1">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <img
                  src="https://rangersdetective.co.in/wp-content/uploads/2020/08/enquiryimg.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>

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
                      <Form className="mt-2">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <input
                                className={`form-control  ${
                                  errors.name && touched.name
                                    ? "is-invalid"
                                    : touched.name
                                    ? "is-valid"
                                    : ""
                                }`}
                                type="text"
                                name="name"
                                placeholder="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <input
                                className={`form-control  ${
                                  errors.email && touched.email
                                    ? "is-invalid"
                                    : touched.email
                                    ? "is-valid"
                                    : ""
                                }`}
                                type="email"
                                name="email"
                                placeholder="email address"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <input
                                className={`form-control  ${
                                  errors.phone && touched.phone
                                    ? "is-invalid"
                                    : touched.phone
                                    ? "is-valid"
                                    : ""
                                }`}
                                type="text"
                                name="phone"
                                placeholder="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-2">
                              <textarea
                                className={`form-control  ${
                                  errors.message && touched.message
                                    ? "is-invalid"
                                    : touched.message
                                    ? "is-valid"
                                    : ""
                                }`}
                                rows="3"
                                name="message"
                                placeholder="message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-success mt-3 text-black  border-2 px-3 py-2"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Address</h6>
                        <h6 className="">
                          Weoto TechLab.Pvt.Ltd.
                          <br />
                          Devashri Apt,College Road,
                          <br /> Nashik
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Phone</h6>
                        <h6 className="">
                          +917775554141
                          <br /> +918885554141
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Email</h6>
                        <p className="">
                          SSS@gmail.com
                          <br /> GD.41@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";

// function Contact() {
//   return (
//     <div className="container">
//       <div className="py-3">
//         <h1>Contact Us Page </h1>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;
