import NavigationIcons from "../components/NavigationIcons";
import { registerStyle } from "../styles/register";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  bgColor: string;
};
function Navigations(props: Readonly<Props>) {
  return (
    <div style={registerStyle("")}>
      <div
        style={{
          background: props.bgColor,
          height: "86%",
          padding: "20px",
        }}
      >
        {props.children}
      </div>
      <NavigationIcons />
    </div>
  );
}

export default Navigations;
