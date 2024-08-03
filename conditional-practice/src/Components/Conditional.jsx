import Drive from "./Drive";

let Conditional = () => {
  let age = 18;

  // if (age >= 18) {
  //   return <Drive age={age} allow="Can"></Drive>;
  // } else {
  //   return <Drive age={age} allow="Can't"></Drive>;
  // }

  return (
    <Drive
      age={age}
      allow={age >= 18 ? <b>{"Can"}</b> : <b>{"Can't"}</b>}
    ></Drive>
  );
};
export default Conditional;
