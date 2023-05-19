import { Fragment, useState } from "react";
import { Check } from "react-feather";
import { toast } from "react-toastify";
import axios from "axios";
// import Avatar from '@components/avatar'
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import CheckInput from "./CheckInput";
import { basr_url } from "./url";


const BasicHookFormTwo = () => {
  const { register, errors, handleSubmit } = useForm();
  const [interestField, setInterestField] = useState(false);

  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const clickModal = () => setModal(!modal);
  const openModal = ()=>{
    setModal(true)
  }
  const closeModal = ()=>{
    setModal(false);
    window.location.reload(false);
  }

  const [nocturnal_polyuria, setNocturnal_polyuria] = useState(null);
  const [lower_production, setLower_production] = useState(null);
  const [minirin_melt, setMinirin_melt] = useState(null);
  const [minirin_melt_level, setMinirin_melt_level] = useState(null);

  const onSubmit = (data) => {
  
    data.nocturnal_polyuria = nocturnal_polyuria;
    data.lower_production = lower_production;
    data.minirin_melt = minirin_melt;
    data.minirin_melt_level = minirin_melt_level;

    // console.log("DATA IS : ", data);

    // if (!data?.name) {
    //   alert("please enter your name first");
    //   return;
    // }
    // if (!data?.email) {
    //   alert("please enter your email");
    //   return;
    // }

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    axios.post(`${basr_url}/api/suervey_2`, data).then((res) => {
      // console.log("response is : ", res);
      openModal()
    })
    .catch(err=>{
      console.log(err)
    })

    // toast.success(<SuccessToast data={data} />, { hideProgressBar: true });
  };

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <Card>
        <CardHeader
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            style={{ width: "4rem", height: "4rem" }}
            src="images/logo2.jpg"
          />
          <CardTitle tag="h4" style={{ fontSize: "1.6rem" }}>
          Nocturia Awareness
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <FormGroup>
              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "start",
                }}
              >
                <p style={{ fontWeight: "500" }}>
                1.	Do you agree that, Nocturnal polyuria is the predominant factor for Nocturia and Primary Nocturnal Enuresis (PNE)?
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setNocturnal_polyuria(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="nocturnal_polyuria"
                      value="yes"
                    />
                    Yes
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setNocturnal_polyuria(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="nocturnal_polyuria"
                      value="no"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "start",
                }}
              >
                <p style={{ fontWeight: "500" }}>
                2.	Lower production of Arginine Vasopressin hormone at night causes nocturnal polyuria. Is the statement correct?
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setLower_production(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="lower_production"
                      value="yes"
                    />
                    Yes
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setLower_production(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="lower_production"
                      value="no"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "start",
                }}
              >
                <p style={{ fontWeight: "500" }}>
                3.	Do you know that Minirin Melt is the only available synthetic melt formulation of arginine vasopressin in Bangladesh?
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setMinirin_melt(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="minirin_melt"
                      value="yes"
                    />
                    Yes
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setMinirin_melt(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="minirin_melt"
                      value="no"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div
                className=""
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "start",
                }}
              >
                <p style={{ fontWeight: "500" }}>
                4.	Minirin Melt has Level 1, Grade A recommendation for Nocturia & PNE.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setMinirin_melt_level(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="minirin_melt_level"
                      value="yes"
                    />
                    Yes
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: ".5rem",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "20px", height: "20px" }}
                      onChange={(e) => setMinirin_melt_level(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="minirin_melt_level"
                      value="no"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>

            <FormGroup className="d-flex mb-0">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button className="mr-1" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

      <Modal
        isOpen={modal}
        toggle={closeModal}
        modalTransition={{ timeout: 500 }}
        centered={true}
      >
        <ModalBody>
          <h1 style={{fontSize:"1.5rem", color:"#58AB27"}}>Congratulation !</h1>
         <hr/>
          <h4 style={{fontSize:"1.2rem"}}>Your data has been submitted</h4>
          {/* <h6 style={{fontSize:".9rem"}}>Please check your mail to collect secret code</h6> */}
        </ModalBody>
      </Modal>
    </>
  );
};

export default BasicHookFormTwo;
