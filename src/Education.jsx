function Education(props) {
  const { title, index, course, college, location, dateAttStart, dateAttEnd } =
    props;

  return (
    <>
      <div className="border rounded p-2 border-warning bg-dark">
        <h2 className="fw-bold text-decoration-underline">{title}</h2>
        <h4 className="pt-3">
          {index}.&#41; {course}
        </h4>
        <ul>
          <li>{college}</li>
          <li>Location: {location}</li>
          <li>
            Dates of Attendance: {dateAttStart} - {dateAttEnd}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Education;
