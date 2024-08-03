import Gallery from "./Components/Gallery";

let App = () => {
  return (
    <div className="container">
      <h1>Notable Scientists</h1>
      <div className="d-flex">
        <Gallery
          name="Maria Skłodowska-Curie"
          img={"szV5sdG"}
          profession="physicist and chemist"
          awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
          discover="polonium (chemical element)"
        ></Gallery>
        <Gallery
          name="Katsuko Saruhashi"
          img={"YfeOqp2"}
          profession="geochemist"
          awards="(Miyake Prize for geochemistry, Tanaka Prize)"
          discover="a method for measuring carbon dioxide in seawater"
        ></Gallery>
      </div>
    </div>
  );
};

export default App;
