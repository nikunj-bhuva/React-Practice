const Women = ({ img, title, description, price }) => {
  const imgUrl = `src/assets/${img}.webp`;
  console.log(imgUrl);

  return (
    <div className="card shadow-lg bg-light-subtle" style={{ width: "18rem" }}>
      <img
        src={imgUrl}
        className="card-img-top"
        alt="..."
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>
  );
};

export default Women;
