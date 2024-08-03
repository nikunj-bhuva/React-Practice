import Drive from "./Drive";

function Conditional() {
  let age = 17;
  if (age >= 18) {
    return <Drive ans={age} allow="Can"></Drive>;
  } else {
    return <Drive ans={age} allow="Can't"></Drive>;
  }
}

export default Conditional;
