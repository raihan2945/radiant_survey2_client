import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SecondPart = ({
  selectedImage,
  setSelectedImage,
  selectedSignatureImage,
  setSelectedSignatureImage,
  wishText,
  setWishText,
  signatureRef,
  submit
}) => {
  const fileInputRef = useRef(null);
  const signaturePhotoRef = useRef(null);

  const textAreaRef = useRef();

  const [isTextAreaFocused, setTextAreaFocus] = useState(false);

  const handleCanvasFocus = () => {
    console.log("canvas called")
    setTextAreaFocus(false);
  };
  // const signatureRef = useRef();


  console.log("signature ref is : ", signatureRef.current.isEmpty())

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedSignatureImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenFileClick = () => {
    fileInputRef.current.click();
  };
  const handleOpenSignatureFileClick = () => {
    signaturePhotoRef.current.click();
  };

  const clearSignature = () => {
    if (selectedSignatureImage) {
      setSelectedSignatureImage(null);
    } else {
      signatureRef.current.clear();
    }
  };

  const saveSignature = () => {
    const signatureImage = signatureRef.current.toDataURL();
    // const signatureImage = signatureRef.current.toDataURL();
    // Do something with the signature image, e.g., send it to the server, save it in state, etc.
    console.log(signatureImage);
  };


  return (
    <div
      className="p-4"
      style={{
        // width:"100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", width: "100%" }}>
        <h4 style={{ fontWeight: "600", fontSize: "18px" }}>SELFIE</h4>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              border: "1px solid #E1E6E6",
              overflow: "hidden",
              width: "150px",
              height: "150px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={selectedImage || "images/vector.jpg"}
              alt="Uploaded"
              className="uploaded-image"
            />
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          id="upload"
          className="upload-input"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <button
          style={{
            marginTop: "5px",
            // textTransform: "uppercase",
            fontSize: "14px",
            border: "none",
            borderRadius: "25px",
            padding: "5px 10px",
            // fontWeight: "500",
            color: "white",
            backgroundColor: "#2D969B",
          }}
          onClick={() => fileInputRef.current.click()}
        >
          Upload a Selfie
        </button>
      </div>
      <div style={{ width: "100%", marginTop: "10px" }}>
        <div className="mb-1">
          <label
            style={{
              color: "black",
              fontSize: "14px",
              fontStyle: "italic",
              fontWeight: "600",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Write a wish
          </label>
          <textarea
            type="text-area"
            className="form-control"
            // id="exampleInputEmail1"
            // aria-describedby="emailHelp"
            ref={textAreaRef}
            onFocus={()=>setTextAreaFocus(true)}
            value={wishText}
            onChange={(e) => setWishText(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          padding: "5px",
          marginTop: "5px",
          backgroundColor: "#F6F6F6",
        }}
        className=""
      >
        <h5
          style={{
            color: "black",
            fontSize: "14px",
            fontStyle: "italic",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Signature :
        </h5>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <input
            type="file"
            accept="image/*"
            id="upload"
            className="upload-input"
            ref={signaturePhotoRef}
            onChange={handleSignatureChange}
            style={{ display: "none" }}
          />
          <button
            style={{
              marginTop: "5px",
              // textTransform: "uppercase",
              fontSize: "14px",
              border: "none",
              borderRadius: "5px",
              padding: "5px 7px",
              // fontWeight: "500",
              color: "white",
              backgroundColor: "#1A73E8",
              marginBottom: "5px",
            }}
            onClick={handleOpenSignatureFileClick}
          >
            Upload Signature Photo
          </button>
          {!selectedSignatureImage && (
            <p style={{ margin: "0", fontSize: "14px", fontStyle: "italic" }}>
              Or write a digital signature below
            </p>
          )}

          {selectedSignatureImage ? (
            <div
              style={{
                border: "1px solid #E1E6E6",
                overflow: "hidden",
                width: "250px",
                height: "100px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contin",
                  objectPosition: "center",
                }}
                src={selectedSignatureImage}
                alt="Uploaded"
                className="uploaded-image"
              />
            </div>
          ) : (
            <div style={{cursor:"pointer",backgroundColor:"white", padding:"0"}} onClick={()=>{console.log("hello")}}>

              <SignatureCanvas
                ref={signatureRef}
                penColor="black"
                onBegin={()=>textAreaRef.current.blur()}
                canvasProps={{
                  width: 300,
                  height: 150,
                  className: "signatureCanvas",
                  style: {
                    border: "1px solid #7A7A7A",
                    padding: "5px",
                  },
                }}
              />
            </div>
          )}
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <button
            style={{ border: "none", background: "none", color: "blue" }}
            onClick={clearSignature}
          >
            {selectedSignatureImage ? "Cancel" : "Clear"}
          </button>
          {/* <button onClick={saveSignature}>Save Signature</button> */}
        </div>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          style={{
            marginTop: "5px",
            // textTransform: "uppercase",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            // fontWeight: "500",
            color: "white",
            backgroundColor: "#2D969B",
          }}
          onClick={submit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SecondPart;
