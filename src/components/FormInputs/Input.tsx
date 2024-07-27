import { inputStyle } from "../../styles/register";

type inputProps = {
  type: string;
  placeholder: string;
  text: string;
  border: boolean;
};
function Input(props: inputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      style={inputStyle(props.text, props.border)}
      className="input"
    />
  );
}

export default Input;
