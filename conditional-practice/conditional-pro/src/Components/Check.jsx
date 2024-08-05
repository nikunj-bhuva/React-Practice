import Men from "./Men";
import Women from "./Women";

const Check = () => {
  const userName = prompt("enter your Gender:");
  const userChange = userName.toLowerCase();

  if (userChange === "men") {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4 bg-info-subtle">
          Men's Collection
        </h1>
        <div className="d-flex gap-4 mt-5">
          <Men
            img="men1"
            title="Roadster"
            description="Men Regular Fit Solid Spread Collar Casual Shirt"
            price="₹439"
          />
          <Men
            img="men2"
            title="Sf Jeans By Pantaloons"
            description="Men Slim Fit Solid Casual Shirt"
            price="₹750"
          />
          <Men
            img="men3"
            title="Raymond"
            description="Men Slim Fit Floral Print Casual Shirt"
            price="₹595"
          />
          <Men
            img="men4"
            title="Voroxy"
            description="Men Regular Fit Self Design Lapel Collar Casual Shirt"
            price="₹999"
          />
        </div>
      </div>
    );
  } else if (userChange === "women") {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4 bg-danger-subtle">
          Women's Collection
        </h1>
        <div className="d-flex gap-4 mt-5">
          <Women
            img="women1"
            title="Mokshi"
            description="Women Printed Viscose Rayon A-line Kurta  (Yellow)"
            price="₹299"
          />
          <Women
            img="women2"
            title="Titanium Silk Industries"
            description="Women Printed Viscose Rayon Straight Kurta  (Multicolor)"
            price="₹499"
          />
          <Women
            img="women3"
            title="Poonam Fashion"
            description="Women Embroidered Viscose Rayon Anarkali Kurta  (Green)"
            price="₹394"
          />
          <Women
            img="women4"
            title="Pyarelal"
            description="Women Floral Print Viscose Rayon A-line Kurta  (Blue)"
            price="₹299"
          />
        </div>
      </div>
    );
  } else {
    alert("Invalid Gender");
  }
};

export default Check;
