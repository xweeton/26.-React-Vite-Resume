import Education from "./Education";
import Experience from "./Experience";

function Header() {
  return (
    <>
      <div className="bg-light p-4 pt-5 pb-5 border rounded">
        <div className="d-flex justify-content-between">
          <h1 className="fw-bold">Moglix, Pune</h1>
          <h1 className="fw-bold border border-dark border-4 p-2">Resume</h1>
        </div>
        <p className="m-0">Phone No: +60123456789</p>
        <p className="m-0">Email: punemoglix@gmail.com</p>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="bg-light border rounded p-4 pe-5 ps-5 mt-5 mb-5">
        <h2 className="fw-bold text-decoration-underline text-center">
          About Me
        </h2>
        <h4 className="pt-3">Languages:</h4>
        <div className="row">
          <ul className="col-4">
            <li>Chinese</li>
            <li>Japanese</li>
            <li>Korean</li>
            <li>Thai</li>
            <li>Vietnamese</li>
          </ul>
          <ul className="col-4">
            <li>Indonesian</li>
            <li>Malay</li>
            <li>Tagalog</li>
            <li>Burmese</li>
            <li>Khmer</li>
          </ul>
          <ul className="col-4">
            <li>Lao</li>
            <li>Hindi</li>
            <li>Bengali</li>
            <li>Tamil</li>
            <li>Telugu</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Skill() {
  return (
    <>
      <div className="bg-light border rounded p-4 pe-5 ps-5 mt-5">
        <h2 className="fw-bold text-decoration-underline text-center">
          Technical Skills
        </h2>
        <h4 className="pt-3">Programming Languages:</h4>
        <div className="row ">
          <ul className="col-6">
            <li>C#</li>
            <li>C++</li>
            <li>Rust</li>
            <li>Go</li>
            <li>MATLAB</li>
          </ul>
          <ul className="col-6">
            <li>Erlang</li>
            <li>COBOL</li>
            <li>Ada</li>
            <li>Lisp</li>
            <li>Fortran</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="text-light text-center fw-bold mt-3 fs-6">
        © 2023 Zeph. All right reserved.
      </div>
    </>
  );
}

function App() {
  // -------education---------

  const educationData1 = {
    index: 1,
    title: "Education",
    course: "Ph.D. in Computer Science",
    college: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA",
    dateAttStart: "December 2017",
    dateAttEnd: "January 2021",
  };

  const educationData2 = {
    index: 2,
    course: "Master of Science in Software Development",
    college: "Stanford University",
    location: "Stanford, CA",
    dateAttStart: "December 2014",
    dateAttEnd: "January 2016",
  };

  const educationData3 = {
    index: 3,
    course: "Master of Science in Mathematics",
    college: "Harvard University",
    location: "Cambridge, MA",
    dateAttStart: "December 2007",
    dateAttEnd: "January 2009",
  };

  // -----------experience---------

  const experienceData1 = {
    index: 1,
    title: "Experience",
    company: "Apple Inc.",
    position: "Senior Software Engineer",
    location: "Cupertino, CA",
    dateEmpStart: "January 2021",
    dateEmpEnd: "June 2023",
    descriptionJob:
      "Developed robust C++ applications, optimizing critical algorithms for a 20% performance boost. Collaborated with a skilled team to deliver high-impact software solutions.",
  };
  const experienceData2 = {
    index: 2,
    title: "",
    company: "Google LLC",
    position: "Backend Software Engineer",
    location: "Mountain View, CA",
    dateEmpStart: "September 2016",
    dateEmpEnd: "December 2017",
    descriptionJob:
      "Leveraged Rust to build a secure and scalable backend system, resulting in improved system reliability and reduced security vulnerabilities. Worked closely with cross-functional teams for successful project delivery.",
  };
  const experienceData3 = {
    index: 3,
    title: "",
    company: "Facebook, Inc.",
    position: "C++ Developer",
    location: "Menlo Park, CA",
    dateEmpStart: "March 2012",
    dateEmpEnd: "August 2014",
    descriptionJob:
      "Led C++ development for mission-critical financial software, streamlining data processing and ensuring real-time analytics accuracy. Collaborated with stakeholders to meet tight project deadlines.",
  };

  // -------------return----------------

  return (
    <>
      <div className="bg-secondary border rounded p-5 m-5">
        <div className="bg-secondary-subtle border rounded p-5">
          <Header />

          <div className="row">
            <div className="col-md-6">
              <About />
            </div>
            <div className="col-md-6">
              <Skill />
            </div>
          </div>
        </div>

        <div className="bg-dark border border-danger rounded mt-5">
          <div className="text-info p-4 m-5">
            <Experience {...experienceData1} />
            <Experience {...experienceData2} />
            <Experience {...experienceData3} />
          </div>

          <div className="text-warning p-4 m-5">
            <Education {...educationData1} />
            <Education {...educationData2} />
            <Education {...educationData3} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
