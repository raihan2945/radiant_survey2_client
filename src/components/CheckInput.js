import React, { useState } from "react";
import "./check.css";
import { Input } from "reactstrap";


const CheckInput = (props) => {
const {index,changeChecked, title, id, checked,register,name} = props;

  const [showInput, setShowInput] = useState(false);
//   const [checked, setChecked] = useState(false);

//   console.log("index is : ",index)

  const changeCheckedValue= (e, chekId)=>{
    const checkValue = e.target.checked;
    // setChecked(checkValue);
    changeChecked(index,id,checkValue)
    setShowInput(checkValue);
  }

  return (
    <div className="check_input">
      <div className="title_check">
        <div style={{fontSize:"1rem", fontWeight:'400'}}>{title}</div>
        <div>
          <input type="checkbox" className="checkbox"  onChange={(e)=>changeCheckedValue(e)} />
        </div>
      </div>
      <div className={`input_body ${showInput && "input_body_show"}`}>
        <input
         style={{width:"100%", padding:".3rem 0.3rem", border:".5px solid #DEE1E6"}}
          id="journal"
          name="journal"
          //   {...register("journal")}
          // invalid={errors.firstNameBasic && true}
          placeholder= {`Enter comment`}
          {...register}
        />
      </div>
    </div>
  );
};

export default CheckInput;
