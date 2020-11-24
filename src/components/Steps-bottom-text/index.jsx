import { Link } from "react-router-dom";
import "./styles.scss";

function Step({ step }) {
  return (
    <div className="container">
      <div className="steps-bottom">
        <div className="step-circle">{step}</div>
        {step === 1 && (
          <>
            <div className="big-text">First things first</div>
            <div className="text">Start planning your dream trip</div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="big-text">Dates</div>
            <div className="text">Choose when you want to go</div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="big-text">Travel companions</div>
            <div className="text">With whom would you like to go?</div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="big-text">Transport</div>
            <div className="text">
              Where and with what will you strart the trip?
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Step;
