function Women({ title, imgSrc, description }) {
  const imgUrl = "src/assets/" + imgSrc + ".webp";

  return (
    <div
      className="card bg-danger-subtle rounded-5 border border-3 border-dark-subtle"
      style={{ width: "16.5rem", margin: "0 auto" }}
    >
      <img
        src={imgUrl}
        className="card-img-top rounded-5 mt-3"
        alt="..."
        style={{ height: "360px", objectFit: "cover", cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-dark">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Women;
