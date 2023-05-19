import logo from "./logo.svg";
import "./App.css";
import BasicHookForm from "./components/BasicHookForm";

import {Routes, Route} from 'react-router-dom'
import BasicHookFormTwo from "./components/BasicHookFormTwo";

function App() {
  return (
    <div className="App">

      <div style={{width:"100vw", maxWidth:"800px"}}>
        <Routes>
          <Route path="/" index  element={<BasicHookForm/>}></Route>
          <Route path="/survey_2" index  element={<BasicHookFormTwo/>}></Route>
        </Routes>
      </div>


    </div>
  );
}

export default App;
