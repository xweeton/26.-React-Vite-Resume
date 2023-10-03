function Experience(props) {
  const {
    index,
    title,
    company,
    position,
    location,
    dateEmpStart,
    dateEmpEnd,
    descriptionJob,
  } = props;

  return (
    <>
      <div className="border rounded p-2 border-info bg-dark">
        <h2 className="fw-bold text-decoration-underline">{title}</h2>
        <h4 className="pt-3">
          {index}.&#41; {company}
        </h4>
        <h5>{position}</h5>
        <ul>
          <li>Location: {location}</li>
          <li>
            Dates of Employment: {dateEmpStart} - {dateEmpEnd}
          </li>
          <li>{descriptionJob}</li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
