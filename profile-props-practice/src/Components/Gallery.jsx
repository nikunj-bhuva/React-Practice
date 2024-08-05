import GetImageUrl from "./GalleryImageUrl";

const Gallery = ({ name, img, profession, awards, awardName, discovered }) => {
  console.log({ name, img, profession, awards, awardName, discovered });

  return (
    <section
      className="profile border border-2 border-secondary-subtle p-4 bg-light shadow rounded-5"
      style={{ height: "330px" }}
    >
      <h2 className="mb-4">{name}</h2>
      <div className="text-center">
        <img
          className="avatar  rounded-5 mb-4"
          src={GetImageUrl(img)}
          alt={img}
          width={80}
          height={80}
        />
      </div>
      <ul>
        <li className="mb-2">
          <b>Profession: </b>
          {profession}
        </li>
        <li className="mb-2">
          <b>{awards}:</b>
          {awardName}
        </li>
        <li className="mb-2">
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
