import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import OtpInput from "react-otp-input";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  const clearOTPValues = () => {
    setOtp("");
  };
  const submitOTPValues = () => {
    console.log("OTP values: " + otp);
    clearOTPValues();
  };
  return (
    <>
      <h3>OTP Value: {otp}</h3>
      <div style={{ textAlign: "center" }}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <br />
      <div>
        <button onClick={clearOTPValues}>Clear</button>{" "}
        <button onClick={submitOTPValues}>Submit/Log</button>
      </div>
    </>
  );
}

export default App;
