import { spanStyle, topTextStyle } from "../styles/register";
import pic from "../assets/ion_earth.png";
import Input from "./FormInputs/Input";
import GreenButton from "./Buttons/GreenButton";
import { Link } from "react-router-dom";
import google from "../assets/google1.png";
import fbook from "../assets/facebook.png";
import apple from "../assets/apple.png";

function Login() {
  const social = [google, fbook, apple];
  return (
    <div style={{ width: "100%" }}>
      <h1 style={topTextStyle("#fff", 700)}>Welcome Back</h1>
      <div
        style={{
          // width: "100%",
          height: "540px",
          background: "#fff",
          margin: "auto",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={pic} alt="" width="200px" style={{ marginTop: "50px" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Input placeholder="email" type="email" text="" border={true} />
          <Input
            placeholder="******************"
            type="password"
            text=""
            border={true}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" name="" id="" />{" "}
              <span style={spanStyle("#585858", 700)}>Remember me</span>
            </div>
            <span style={spanStyle("#585858", 700)}>Forgot Password?</span>
          </div>
        </div>
        <GreenButton
          text="Sign in"
          color="#008FA0"
          buttonClick={() => alert("Sign in successfull")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
          gap: 40,
        }}
      >
        {social.map((icon, idx) => (
          <div
            key={idx}
            style={{
              background: "white",

              borderRadius: "200px",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={icon} alt="" style={{ width: "30%", height: "30%" }} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={spanStyle("#fff", 400)}>
          Don't have an Account? <Link to="/register">sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
