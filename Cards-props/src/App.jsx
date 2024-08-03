import Card from "./Components/Card";
import first from "../src/assets/headphone.png";
import second from "../src/assets/sonytv.png";
import third from "../src/assets/sonymobile.png";
import forth from "../src/assets/sonycamera.png";

function App() {
  return (
    <>
      <Card
        img={first}
        title="Product Name: Sony Black Headphone"
        description="Description: Headphones are electronic audio device that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer. Headphones come in many different sizes from big to small. They are also known as earphones, stereophones, headsets or even 'cans'."
        price="price: ₹2000"
      ></Card>
      <Card
        img={second}
        title="Product Name: Sony Tv"
        description="Description: Sony is one of a few companies that make both OLED and LED options. It means you can choose either panel if you want to buy a Sony TV."
        price="Price: ₹70,000"
      ></Card>
      <Card
        img={third}
        title="Product: Sony Experia Mobile"
        description="Description: The phone has an amazing IP rating of 58 which means it can resist if submerged into water up to 1.5 meters for 30 minutes."
        price="Price: ₹55,000"
      ></Card>
      <Card
        img={forth}
        title="Product: Sony Camera"
        description="Description: camera, in photography, device for recording an image of an object on a light-sensitive surface."
        price="Price: ₹85,000"
      ></Card>
    </>
  );
}

export default App;
