import { useState } from "react";
import { Data } from "./Data";

const Productcard = () => {
  const [currentIndex, setIndex] = useState(0);

  let productData = Data[currentIndex];

  function handlerNext() {
    currentIndex < Data.length - 1 ? setIndex(currentIndex + 1) : setIndex(0);
  }

  function handlerPrevious() {
    currentIndex > 0 ? setIndex(currentIndex - 1) : setIndex(Data.length - 1);
  }

  return (
    <>
      <button className="btn btn-info" onClick={handlerPrevious}>
        Previous
      </button>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={productData.image}
          className="card-img-top"
          alt="..."
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{productData.title}</h5>
          <p className="card-text">{productData.description}</p>
          <a href="#" className="btn btn-primary">
            {productData.price}
          </a>
        </div>
      </div>
      <button className="btn btn-info" onClick={handlerNext}>
        Next
      </button>
    </>
  );
};

export default Productcard;
