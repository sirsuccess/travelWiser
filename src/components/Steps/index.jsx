import { Link } from "react-router-dom";
import "./styles.scss";
import Data from "./data";
import Step_bottom from "../Steps-bottom-text"

function Step({ steps }) {
  return (
    <div className="container steps-container">
      <div className="steps">
        {Data.map((step, index) => (
          <div className="step">
            <div>Step {step.step}</div>
            <div className="text">{step.text}</div>
            {step.step === 4 ? (
              <div
                className={steps === step.step ? "bar4" : "bar-white4"}
              ></div>
            ) : (
              <div className={steps === step.step ? "bar" : "bar-white"}></div>
            )}
          </div>
        ))}
      </div>
      <Step_bottom step={steps}/>
  
    </div>
  );
}

export default Step;
