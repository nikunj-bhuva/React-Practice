import Drive from "./Drive";

const Conditional = () => {
  let age = 18;

  if (age >= 18) {
    return <Drive Age={age} allow="Can"></Drive>;
  } else {
    return <Drive Age={age} allow="Can't"></Drive>;
  }
};

export default Conditional;
