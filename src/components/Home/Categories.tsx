import { categoryStyle } from "../../styles/register";

type Props = {
  categories: { name: string; icon: string };
  idx: number;
};
function Categories(props: Props) {
  return (
    <div style={categoryStyle()} className="category">
      <div
        style={{
          background: props.idx === 0 ? "#008FA0" : "none",
          borderRadius: "100%",
        }}
      >
        <img src={props.categories.icon} alt="" />
      </div>
      <p>{props.categories.name}</p>
    </div>
  );
}

export default Categories;
