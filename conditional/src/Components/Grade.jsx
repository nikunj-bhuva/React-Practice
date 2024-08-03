import Marks from "./Marks";

function Grade() {
  let userMark = +prompt("enter your Marks: (between 0 to 100)");
  let icon;

  if (userMark >= 90 && userMark <= 100) {
    icon = "🤩";
    return <Marks mark={userMark} grade="A" emoji={icon}></Marks>;
  } else if (userMark >= 70 && userMark <= 89) {
    icon = "😎";
    return <Marks mark={userMark} grade="B" emoji={icon}></Marks>;
  } else if (userMark >= 50 && userMark <= 69) {
    icon = "😊";
    return <Marks mark={userMark} grade="C" emoji={icon}></Marks>;
  } else if (userMark > 35 && userMark <= 49) {
    icon = "🙄";
    return <Marks mark={userMark} grade="D" emoji={icon}></Marks>;
  } else if (userMark > 0 && userMark <= 35) {
    icon = "😥";
    return <Marks mark={userMark} grade="Failed" emoji={icon}></Marks>;
  } else {
    icon = "❎";
    return <Marks mark={userMark} grade="Not Found" emoji={icon}></Marks>;
  }
}

export default Grade;
