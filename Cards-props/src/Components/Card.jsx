function Card(props) {
  console.log(props);
  return (
    <div className="card text-bg-dark  w-50  m-auto  mb-4">
      <img src={props.img} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title  fs-4">{props.title}</h5>
        <p
          className="card-text"
          style={{ fontSize: "19px", fontWeight: "bold" }}
        >
          {props.description}
        </p>
        <p
          className="card-text"
          style={{ fontSize: "19px", fontWeight: "bold" }}
        >
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
