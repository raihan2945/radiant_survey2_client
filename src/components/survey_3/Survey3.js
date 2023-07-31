import React, { useState, useRef } from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import { basr_url } from "../url";
import axios from "axios";

const Survey3 = () => {
  const [part, setPart] = useState("first");

  const signatureRef = useRef();

  const [name, setName] = useState(null);
  const [mio_code, setMio_code] = useState(null);

  const [wishText, setWishText] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSignatureImage, setSelectedSignatureImage] = useState(null);

  const submit = () => {
    console.log("data is : ", selectedImage)

    // const formData = new FormData();
    

    // formData.append("name", name);
    // formData.append("mio_code", mio_code);
    // formData.append("wish", wishText);
    // formData.append("signature", selectedSignatureImage);
    // formData.append("profile", selectedImage);

    if(!selectedImage){
        alert("Please Upload a selfie photo")
        return
    }
    if(!wishText){
        alert("Please write wish text")
        return
    }
    if(!selectedSignatureImage && !signatureRef?.current){
        alert("Please Upload or write digital signature")
        return
    }

    const data = {
        name:name,
        mio_code: mio_code,
        wish:wishText,
        signature: selectedSignatureImage || signatureRef.current.toDataURL(),
        profile:selectedImage
    }

    // return

    axios
      .post(`${basr_url}/api/suervey_3`, data )
      .then((res) => {
        console.log("response is : ", res);
        //   openModal();
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
    </div>
  );
};

export default Survey3;
