import { greenButtonStyle } from "../../styles/register";

type ButtonProps = {
  text: string;
  buttonClick: () => void;
  color: string;
};
function GreenButton(props: ButtonProps) {
  return (
    <button onClick={props.buttonClick} style={greenButtonStyle(props.color)}>
      {props.text}
    </button>
  );
}

export default GreenButton;
