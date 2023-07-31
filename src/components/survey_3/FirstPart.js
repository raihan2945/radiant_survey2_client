import React from "react";

const FirstPart = ({ setPart, name, setName, mio_code, setMio_code }) => {
  return (
    <div
      className="p-2"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#F8F9FA",
          padding: "15px 15px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        }}
      >
        <div className="mb-3">
          <label
            style={{ color: "#2D969B", fontWeight: "600" }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Doctor Name
          </label>
          <input
            type="text"
            className="form-control"
            // id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: "#2D969B", fontWeight: "600" }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            MIO Code
          </label>
          <input
            type="text"
            className="form-control"
            // id="exampleInputPassword1"
            value={mio_code}
            onChange={(e) => setMio_code(e.target.value)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
                if(!name && !mio_code){
                    alert("Please enter Name & MIO code")
                    return
                }
              setPart("second");
            }}
            style={{ backgroundColor: "#2D969B", color: "white" }}
            type="submit"
            className="btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
