import Gallery from "./Components/Gallery";
import GalleryImageUrl from "./Components/GalleryImageUrl";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5 mt-3 bg-info rounded-5">Notable Scientists</h1>
        <div className="row row-cols-2 d-flex">
          <div className="col-6">
            <Gallery
              name="Maria Skłodowska-Curie"
              img="szV5sdG"
              profession=" physicist and chemist"
              awards="Awards: 4"
              awardName="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
          Matteucci Medal)"
              discovered="polonium (chemical element)"
            />
          </div>
          <div className="col-6">
            <Gallery
              name="Katsuko Saruhashi"
              img="YfeOqp2"
              profession="geochemist"
              awards="Awards: 2"
              awardName="(Miyake Prize for geochemistry, Tanaka Prize)"
              discovered="a method for measuring carbon dioxide in seawater"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
