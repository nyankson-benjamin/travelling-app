import img from "../assets/ion_earth.png";
import { formInputs } from "../constants/formInputs";
import { labelStyle, spanStyle, topTextStyle } from "../styles/register";
import GreenButton from "./Buttons/GreenButton";
import Input from "./FormInputs/Input";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    alert("Signup successfull");
  };
  return (
    <div>
      <h1 style={topTextStyle("#000", 600)}>
        Let's start your Journey together
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={img} alt="" style={{ width: "120px" }} />

        <form action="" style={{ display: "flex", flexDirection: "column" }}>
          {formInputs.map((input, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
              <label style={labelStyle}>{input.name}</label>

              <Input
                type={input.type}
                placeholder={input.placeholder}
                text="register"
                border={false}
              />
            </div>
          ))}

          <GreenButton
            text="Sign Up"
            buttonClick={handleSignUp}
            color="#008FA0"
          />
        </form>
        <br />
        <span style={spanStyle("#585858", 400)}>Already have an account?</span>
        <GreenButton text="Sign in" buttonClick={handleSignIn} color="" />
      </div>
    </div>
  );
}

export default SignupForm;
