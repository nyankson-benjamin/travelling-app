import Register from "../Layouts/Register";
import Login from "../components/Login";

function SignIn() {
  return (
    <Register bgColor="rgba(0, 143, 160, 0.8)">
      <Login />
    </Register>
  );
}

export default SignIn;
