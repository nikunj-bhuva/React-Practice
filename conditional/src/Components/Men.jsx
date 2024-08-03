function Men({ title, imgSrc, description, price, delPrice, discount }) {
  const imgUrl = "/src/assets/" + imgSrc + ".webp";
  console.log(imgUrl);

  return (
    <div
      className="card rounded-5 bg-primary-subtle border border-3 border-dark-subtle"
      style={{ width: "16.5rem", margin: "0 auto" }}
    >
      <img
        src={imgUrl}
        className="card-img-top  rounded-5 mt-3"
        alt="..."
        style={{ height: "360px", objectFit: "cover", cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <span>
          {price} <del>{delPrice}</del>
          <b className="ps-2">{discount}</b>
        </span>
        <div>
          <a href="#" className="btn  btn-dark rounded-5 mt-3">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Men;
