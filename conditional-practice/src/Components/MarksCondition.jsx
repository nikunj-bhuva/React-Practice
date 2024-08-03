import Gradesystem from "./Gradesystem";

let Markscondition = () => {
  let userMark = +prompt("enter your Marks(marks between (0 to 100)):");
  if (userMark >= 90 && userMark <= 100) {
    return <Gradesystem Mark={userMark} Grade="A"></Gradesystem>;
  } else if (userMark >= 70 && userMark <= 89) {
    return <Gradesystem Mark={userMark} Grade="B"></Gradesystem>;
  } else if (userMark >= 50 && userMark <= 69) {
    return <Gradesystem Mark={userMark} Grade="C"></Gradesystem>;
  } else if (userMark > 35 && userMark <= 49) {
    return <Gradesystem Mark={userMark} Grade="D"></Gradesystem>;
  } else if (userMark >= 0 && userMark <= 35) {
    return <Gradesystem Mark={userMark} Grade="Failed"></Gradesystem>;
  } else {
    return <Gradesystem Mark={userMark} Grade="Invalid Marks"></Gradesystem>;
  }
};

export default Markscondition;
