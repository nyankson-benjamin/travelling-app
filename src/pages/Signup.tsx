import Register from "../Layouts/Register";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <div>
      <Register bgColor="rgba(255, 255, 255, 0.7)">
        <SignupForm />
      </Register>
    </div>
  );
}

export default Signup;
