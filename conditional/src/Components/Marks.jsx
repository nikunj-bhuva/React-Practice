function Marks({ mark, grade, emoji, invalid }) {
  return (
    <div className="shadow rounded-5 mt-5 text-center bg-info-subtle border border-5 border-info-subtle">
      <h1 className="pt-4 pb-4">:- Grade System :-</h1>
      <div className="shadow w-50 bg-light rounded-5 mt-4 mb-5 m-auto border border-5">
        <p className="fs-3 fw-semibold pt-3 pb-2">
          <b>{emoji}</b> Your Mark Is {mark}. Your Grade Is {grade}.
        </p>
      </div>
    </div>
  );
}

export default Marks;
