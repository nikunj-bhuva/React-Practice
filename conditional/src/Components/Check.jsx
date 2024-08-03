import Men from "./Men";
import Women from "./Women";

function Check() {
  let userName = prompt("enter Your Gender Collection: ");
  const userChange = userName.toLowerCase();

  if (userChange === "men") {
    return (
      <div className="container my-4">
        <div className="row row-gap-4 column-gap-4">
          <h1 className="text-center mt-5 mb-5  bg-info-subtle border border-5 border-info-subtle rounded-5 pt-3 pb-3">
            Men's Collection
          </h1>
          <Men
            title="The Indian Garage Co."
            imgSrc="shirt1"
            description="Men Regular Fit Printed Spread Collar Casual Shirt"
            price="₹721"
            delPrice="₹1,849"
            discount="61% off"
          ></Men>
          <Men
            title="HIGHLANDER"
            imgSrc="shirt2"
            description="Men Slim Fit Striped Cut Away Collar Casual Shirt"
            price="₹665"
            delPrice="₹1,799"
            discount="65% off"
          ></Men>
          <Men
            title="ATLANTERIAN"
            imgSrc="shirt3"
            description="Men Comfort Fit Fit Self Design Casual Shirt"
            price="₹499"
            delPrice="₹699"
            discount=""
          ></Men>
          <Men
            title="HIGHLANDER"
            imgSrc="shirt4"
            description="Men Slim Fit Striped Spread Collar Casual Shirt"
            price="₹773"
            delPrice="₹1,799"
          ></Men>
          <Men
            title="VERIDO"
            imgSrc="tshirt1"
            description="Oversized Men Printed, Typography Round Neck Pure Cotton Navy Blue T-Shirt"
            price="₹339"
            delPrice="₹1,199"
          ></Men>
          <Men
            title="STI"
            imgSrc="tshirt2"
            description="Men Printed Round Neck Polyester Multicolor T-Shirt"
            price="₹191"
            delPrice="₹999"
          ></Men>
          <Men
            title="JUMP CUTS"
            imgSrc="tshirt3"
            description="Men Printed Round Neck Cotton Blend Pink, Black T-Shirt"
            price="₹279"
            delPrice="₹1,599"
          ></Men>
          <Men
            title="LIMIT LESS"
            imgSrc="tshirt4"
            description="Men Printed Round Neck Cotton Blend Blue T-Shirt"
            price="₹299"
            delPrice="₹1,099"
          ></Men>
          <Men
            title="PETER ENGLAND"
            imgSrc="suit1"
            description="Men Single Breasted - 2 button Solid Suit"
            price="₹6,179"
            delPrice="₹12,999"
          ></Men>
          <Men
            title="PARX"
            imgSrc="suit2"
            description="Men 2 Piece Set Self Design Suit"
            price="₹7,699"
            delPrice="₹13,999"
          ></Men>
        </div>
      </div>
    );
  } else if (userChange === "women") {
    return (
      <div className="container">
        <div className="row  row-gap-5 column-gap-4  my-4">
          <h1 className="text-center mt-5 mb-5 bg-danger-subtle border border-5  border-danger-subtle rounded-5 pt-3 pb-3">
            Women's Collection
          </h1>
          <Women
            title="Janasya"
            imgSrc="dress1"
            description="Women Tiered Yellow, Light Green Dress"
          ></Women>
          <Women
            title="Tokyo Talkies"
            imgSrc="dress2"
            description="Women Ribbed Yellow Dress"
          ></Women>
          <Women
            title="Mast & Harbour"
            imgSrc="dress3"
            description="Women A-line Blue Dress"
          ></Women>
          <Women
            title="Tokyo Talkies"
            imgSrc="dress4"
            description="Women Bodycon Grey Dress"
          ></Women>
          <Women
            title="Tokyo Talkies"
            imgSrc="frok1"
            description="Women Shirt Green Dress"
          ></Women>
          <Women
            title="Tokyo Talkies"
            imgSrc="frok2"
            description="Women A-line Pink Dress"
          ></Women>
          <Women
            title="High Star"
            imgSrc="frok3"
            description="Women Fit and Flare Pink Dress"
          ></Women>
          <Women
            title="Tokyo Talkies"
            imgSrc="frok4"
            description="Women Bodycon Black Dress"
          ></Women>
          <Women
            title="Akshara Fashion"
            imgSrc="longdress"
            description="Women Fit and Flare Light Green Dress"
          ></Women>
          <Women
            title="Madhuram"
            imgSrc="longdress1"
            description="Embroidered Silk Blend Stitched Anarkali Gown  (Orange)"
          ></Women>
        </div>
      </div>
    );
  } else {
    return alert("Not Found!");
  }
}

export default Check;
