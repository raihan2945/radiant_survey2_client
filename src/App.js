import logo from "./logo.svg";
import "./App.css";
import BasicHookForm from "./components/BasicHookForm";

import {Routes, Route} from 'react-router-dom'
import BasicHookFormTwo from "./components/BasicHookFormTwo";
import Survey3 from "./components/survey_3/Survey3";

function App() {
  return (
    <div className="App">

      <div style={{width:"100vw", maxWidth:"800px"}}>
        <Routes>
          <Route path="/" index  element={<BasicHookForm/>}></Route>
          <Route path="/survey_2" index  element={<BasicHookFormTwo/>}></Route>
          <Route path="/doctor_wish" index  element={<Survey3/>}></Route>
        </Routes>
      </div>


    </div>
  );
}

export default App;
