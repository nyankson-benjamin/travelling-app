import { registerStyle } from "../styles/register";
import img from "../assets/Earth.png";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  bgColor: string;
};
function Register(props: Readonly<Props>) {
  return (
    <div style={registerStyle(img)}>
      <div
        style={{
          background: props.bgColor,
          height: "94.5%",
          padding: "20px",
          borderRadius:'10px'
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Register;
