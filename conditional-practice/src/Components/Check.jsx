import Men from "./Men";
import Women from "./Women";

let Check = () => {
  let userInput = prompt("enter your Gender:");
  let userNameChange = userInput.toLowerCase();
  if (userNameChange === "men") {
    return (
      <div className="container">
        <div className="d-flex">
          <Men imgName="shirt1"></Men>
          <Men imgName="shirt2"></Men>
          <Men imgName="shirt3"></Men>
          <Men imgName="shirt4"></Men>
        </div>
      </div>
    );
  } else if (userNameChange === "women") {
    return (
      <div className="container">
        <div className="d-flex">
          <Women imgName="dress1"></Women>
          <Women imgName="dress2"></Women>
          <Women imgName="dress3"></Women>
          <Women imgName="dress4"></Women>
        </div>
      </div>
    );
  } else {
    alert("Invalid Gender");
  }
};

export default Check;
