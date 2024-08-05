const Drive = ({ Age, allow }) => {
  console.log(Age, allow);
  return (
    <h1>
      Your Age Is {Age}. You {allow} Drive.
    </h1>
  );
};

export default Drive;
