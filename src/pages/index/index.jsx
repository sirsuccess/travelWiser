import "./index.scss";
import Navbar from "../../components/Navbar";
import Steps from "../../components/Steps";
import cheveron_right from "../../assets/icons/cheveron-right.png";

function App() {
  return (
    <div className="index">
      <div className="overlay">
        <Navbar />
        <Steps steps={1} />
        <form className="container form-container">
          <div className="card"></div>
          <div className="btn-section">
            <button className="btn cancel">Cancel</button>
            <button className="btn   next">
              Next <img src={cheveron_right} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
