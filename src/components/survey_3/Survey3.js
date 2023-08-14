import React, { useState, useRef } from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import { basr_url } from "../url";
import axios from "axios";

import {
    Modal,
    ModalBody,
  } from "reactstrap";

const Survey3 = () => {
  const [part, setPart] = useState("first");

  const signatureRef = useRef();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    window.location.reload(false);
  };


  const [name, setName] = useState(null);
  const [mio_code, setMio_code] = useState(null);

  const [wishText, setWishText] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSignatureImage, setSelectedSignatureImage] = useState(null);

  const submit = () => {
    // console.log("data is : ", selectedImage);

    // const formData = new FormData();

    // formData.append("name", name);
    // formData.append("mio_code", mio_code);
    // formData.append("wish", wishText);
    // formData.append("signature", selectedSignatureImage);
    // formData.append("profile", selectedImage);

    // if (!selectedImage) {
    //   alert("Please Upload a selfie photo");
    //   return;
    // }
    if (!wishText) {
      alert("Please write wish text");
      return;
    }
    if (!selectedSignatureImage && !signatureRef?.current) {
      alert("Please Upload or write digital signature");
      return;
    }

    const data = {
      name: name,
      mio_code: mio_code,
      wish: wishText,
      signature: selectedSignatureImage || signatureRef.current.toDataURL(),
      profile: selectedImage || "",
    };

    // return

    axios
      .post(`${basr_url}/api/suervey_3`, data)
      .then((res) => {
        console.log("response is : ", res);
          openModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {part == "first" ? (
        <FirstPart
          name={name}
          setName={setName}
          mio_code={mio_code}
          setMio_code={setMio_code}
          setPart={setPart}
        />
      ) : (
        <SecondPart
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedSignatureImage={selectedSignatureImage}
          setSelectedSignatureImage={setSelectedSignatureImage}
          wishText={wishText}
          setWishText={setWishText}
          signatureRef={signatureRef}
          submit={submit}
        />
      )}

      <Modal
        isOpen={modal}
        toggle={closeModal}
        modalTransition={{ timeout: 500 }}
        centered={true}
      >
        <ModalBody>
          <div style={{textAlign:"center"}}>
          <h1 style={{ fontSize: "1.5rem", color: "#ec293f" }}>
            Thank You!
          </h1>
          <hr />
          <h4 style={{ fontSize: "1rem", textAlign:"center" }}>Best of luck to our boys in Red & Green for the 2023 ICC Cricket World Cup</h4>
          <h4 style={{ fontSize: "1rem", textAlign:"center", color:"#58ab27", fontWeight:"700"}}>COME ON TEAM BANGLADESH, BRING IT HOME</h4>
          </div>
            
          {/* <h6 style={{fontSize:".9rem"}}>Please check your mail to collect secret code</h6> */}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Survey3;
