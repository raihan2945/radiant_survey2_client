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
} from "reactstrap";
import CheckInput from "./CheckInput";
import { basr_url } from "./url";

// const SuccessToast = ({ data }) => {
//   return (
//     <Fragment>
//       <div className="toastify-header">
//         <div className="title-wrapper">
//           {/* <Avatar size='sm' color='success' icon={<Check size={12} />} /> */}
//           <h6 className="toast-title">Form Submitted!</h6>
//         </div>
//       </div>
//       <div className="toastify-body">
//         <ul className="list-unstyled mb-0">
//           <li>
//             <strong>firstName</strong>: {data.firstName}
//           </li>
//           <li>
//             <strong>lastName</strong>: {data.lastName}
//           </li>
//           <li>
//             <strong>email</strong>: {data.email}
//           </li>
//         </ul>
//       </div>
//     </Fragment>
//   );
// };

const BasicHookForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const [interestField, setInterestField] = useState(false);

  const [havePatient, setHavePateint] = useState(null);
  const [aware, setAware] =useState(null);

  let allCheckBox = [
    {
      id: 1,
      name: "a_input",
      title: "A.	Journal / Paper Publication",
      checked: 0,
    },
    {
      id: 2,
      name: "b_input",
      title: "B.	Journal Subscription / Articles",
      checked: 0,
    },
    {
      id: 3,
      name: "c_input",
      title: "C.	Registration / Membership",
      checked: 0,
    },
    {
      id: 4,
      name: "d_input",
      title: "D.	Oncology Workshop or Seminar",
      checked: 0,
    },
    {
      id: 5,
      name: "e_input",
      title: "E. Special CME with National KOL",
      checked: 0,
    },
    {
      id: 6,
      name: "f_input",
      title: "F. Research / Clinical Trail",
      checked: 0,
    },
    {
      id: 7,
      name: "g_input",
      title: "G. Scientific Presentation Support",
      checked: 0,
    },
    { id: 8, name: "h_input", title: "H. Poster Presentation", checked: 0 },
    { id: 9, name: "i_input", title: "I. Others", checked: 0 },
  ];

  const changeChecked = async (index, id, checkValue) => {
    // alert(id, `${checkValue}`)
    // console.log(checkValue,"check value is ")
    if (checkValue) {
      allCheckBox[index].checked = 1;
    } else {
      allCheckBox[index].checked = 0;
    }

    // console.log('ALL CHECK BOX IS : ', allCheckBox)
  };

  const onSubmit = (data) => {
    // data.a_checked = allCheckBox[0].checked;
    // data.b_checked = allCheckBox[1].checked;
    // data.c_checked = allCheckBox[2].checked;
    // data.d_checked = allCheckBox[3].checked;
    // data.e_checked = allCheckBox[4].checked;
    // data.f_checked = allCheckBox[5].checked;
    // data.g_checked = allCheckBox[6].checked;
    // data.h_checked = allCheckBox[7].checked;
    // data.i_checked = allCheckBox[8].checked;
    data.havePatient = havePatient
    data.aware = aware
    console.log("DATA IS : ", data);

    if(!data?.name){
      alert("please enter your name first")
      return
    }
    if(!data?.email){
      alert("please enter your email")
      return
    }

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    axios.post(`${basr_url}/api/register`, data).then((res) => {
      console.log("response is : ", res);
      window.location.reload(false);
    });

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
        <CardHeader style={{display:'flex', alignItems:"center", gap:"1rem"}}>
          <img style={{width:"4rem",height:"4rem"}} src="images/logo.jpg"/>
          <CardTitle tag="h4" style={{fontSize:"1.6rem"}}>Stroke awareness initiative</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="name">Doctor Name</Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="name"
                name="name"
                {...register("name")}
                // invalid={errors.name && true}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Institute">Working Hospital</Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="hospital"
                name="hospital"
                {...register("hospital")}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter working hospital"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ textAlign: "start" }} for="email">
                Email
              </Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="email"
                name="email"
                type="email"
                {...register("email")}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="phone"
                name="phone"
                {...register("phone")}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter your phone"
              />
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
                Do you have any stroke patients in your family?
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
                      onChange={(e) => setHavePateint(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="stroke_patient"
                      value="yes"
                    />{" "}
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
                      onChange={(e) => setHavePateint(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      value="no"
                      name="stroke_patient"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="chamber">
                If yes, which relative is the stroke patient
              </Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="chamber"
                name="chamber"
                {...register("relative_patient")}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter relative is the stroke patient"
              />
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
                Are you aware of the thrombolysis treatment in Stroke?
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
                      onChange={(e) => setAware(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="aware"
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
                      onChange={(e) => setAware(e.target.value)}
                      // checked={interestField}
                      type="radio"
                      name="aware"
                      value="no"
                    />
                    No
                  </div>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="chamber">
                How many stroke patients does your hospital deal every month?
              </Label>
              <input
                style={{
                  width: "100%",
                  padding: ".3rem 0.3rem",
                  border: ".5px solid #DEE1E6",
                }}
                id="chamber"
                name="chamber"
                {...register("stroke_count")}
                // invalid={errors.firstNameBasic && true}
                placeholder="Enter stroke patients does your hospital deal every month"
              />
            </FormGroup>

            {/* 5. Do you have any stroke patients in your family
            6. If yes, which relative is the stroke patient
            7. Are you aware of the thrombolysis treatment in Stroke
          8. How many stroke patients does your hospital deal every month? */}

            {/* <div
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
              1. Do you have any academic interest in scientific ground?
              </p>
              <div style={{display:"flex", gap:"1rem"}}>
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
                onChange={(e) => setInterestField(e.target.checked)}
                checked={interestField}
                type="checkBox"
                name="check"
                />{" "}
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
                  // onChange={(e) => setInterestField(e.target.checked)}
                  // checked={interestField}
                  type="checkBox"
                  name="check"
                  />{" "}
                  No
                  </div>
                  </div>
                  
                </div> */}

            {/* {interestField && (
              <div>
                <p
                style={{
                  textAlign: "start",
                  margin: ".5rem 0rem",
                  fontWeight: "500",
                }}
                >
                2. In which specific field do you have the Interest? (You can
                  choose multiple options){" "}
                  </p>
                  <div>
                  {allCheckBox.map((checkItem, index) => {
                    return (
                      <CheckInput
                      key={checkItem.id}
                      index={index}
                        changeChecked={changeChecked}
                        title={checkItem.title}
                        id={checkItem.id}
                        checked={checkItem.checked}
                        name={checkItem.name}
                        register={register(checkItem.name)}
                        />
                        );
                      })}
                      </div>
                      </div>
                    )} */}

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
    <img style={{width:"100%",height:"auto", objectFit:"contain", marginTop:"1rem"}} src="images/bottom_image.jpg"/>
    </>
  );
};

export default BasicHookForm;
