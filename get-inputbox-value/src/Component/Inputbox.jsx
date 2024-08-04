import { useState } from "react";

let Inputbox = () => {
  // debugger;
  const commonClassNames = "form-label text-light fw-medium mt-3";
  const spanCommonClass = "fw-medium fs-5";

  // debugger;
  let [formData, setFormValue] = useState({
    firstValue: "",
    secondValue: "",
    thirdValue: "",
    forthValue: "",
    fifthValue: "",
  });

  // handler first input function //

  const handlerFirstInput = (e) => {
    setFormValue({ ...formData, firstValue: e.target.value });
  };

  // handler second input function //

  const handlerSecondInput = (e) => {
    setFormValue({ ...formData, secondValue: e.target.value });
  };

  // handler third input function //

  const handlerThirdInput = (e) => {
    setFormValue({ ...formData, thirdValue: e.target.value });
  };

  // handler forth input function //

  const handlerForthInput = (e) => {
    setFormValue({ ...formData, forthValue: e.target.value });
  };

  // handler forth input function //

  const handlerFifthInput = (e) => {
    setFormValue({ ...formData, fifthValue: e.target.value });
  };

  const { firstValue, secondValue, thirdValue, forthValue, fifthValue } =
    formData;

  return (
    <>
      <div
        className="mb-3 mt-5 bg-info p-4 border border-3 border-dark
      rounded-5"
      >
        <h1 className="text-center mb-5">
          <mark className="rounded-3">Form Control</mark>
        </h1>
        <label className={`${commonClassNames}`}>First Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter your first name"
          onChange={handlerFirstInput}
        />
        <label className={`${commonClassNames}`}>Last Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter your second name"
          onChange={handlerSecondInput}
        />
        <label className={`${commonClassNames}`}>Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter your email"
          onChange={handlerThirdInput}
        />
        <label className={`${commonClassNames}`}>Password:</label>
        <input
          type="password"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="enter your password"
          onChange={handlerForthInput}
        />
        <label className={`${commonClassNames}`}>Address:</label>
        <textarea
          className="form-control"
          rows="3"
          onChange={handlerFifthInput}
        ></textarea>
        <div className="text-center">
          <button type="button" className="btn btn-light mt-5">
            Submit
          </button>
        </div>
      </div>
      <h1 className="text-center mb-5 mt-5 bg-info-subtle">
        <mark className="rounded-4">Form Data</mark>
      </h1>
      <div className="container bg-info border border-3 border-dark p-4 d-flex flex-column row-gap-2 rounded-5">
        <span className={`${spanCommonClass}`}>First Name: {firstValue}</span>
        <span className={`${spanCommonClass}`}>Last Name: {secondValue}</span>
        <span className={`${spanCommonClass}`}>Email: {thirdValue}</span>
        <span className={`${spanCommonClass}`}>Password: {forthValue}</span>
        <span className={`${spanCommonClass}`}>Address: {fifthValue}</span>
      </div>
    </>
  );
};

export default Inputbox;
