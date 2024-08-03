import Galleryimgurl from "./Galleryimgurl";

let Gallery = (props) => {
  console.log(props);
  return (
    <div>
      <section className="profile">
        <h2>{props.name}</h2>
        <img
          className="avatar"
          src={Galleryimgurl(props.img)}
          alt={`${props.img}`}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.profession}
          </li>
          <li>
            <b>Awards: 4 </b>
            {props.awards}
          </li>
          <li>
            <b>Discovered: </b>
          {props.discover}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Gallery;
