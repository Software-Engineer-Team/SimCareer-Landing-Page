const School = ({ schoolName, descriptions }) => {
  return (
    <div className="school-container">
      <div class="school-container-card">
        <div className="school-container-card-img">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <div />
            <div />
          </div>
        </div>
        <div className="school-container-content">
          <div style={{ height: "200px" }}></div>
          <h1>{schoolName}</h1>
          <ul>
            {descriptions.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default School;
