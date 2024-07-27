import {
  spanStyle,
  textStyle,
  tripImg,
  tripStyle,
} from "../../styles/register";
import rate from "../../assets/icons/rate.svg";
import location from "../../assets/icons/location1.svg";
import like from "../../assets/icons/like.svg";

type tripProps = {
  trips: {
    source: string;
    description: string;
    country: string;
    price: number;
    image_url: string;
    rate: number;
  };
};
function Trips(props: tripProps) {
  return (
    <div style={tripStyle()}>
      <img src={props.trips.image_url} alt="" style={tripImg} />

      <div
        style={{
          width: "141px",
          marginLeft: "6px",
          marginRight: "6px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={textStyle("16px", "#1E1E1E", 700)}>{props.trips.source}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={rate} alt="" className="rate" />
          <p style={spanStyle("#1E1E1E", 400)}>{props.trips.rate}</p>
        </div>
      </div>
      <div
        style={{
          width: "141px",
          marginLeft: "6px",
          display: "flex",
          gap: 2,
        }}
      >
        <img src={location} alt="" />
        <p style={spanStyle("#1E1E1E", 400)}>{props.trips.country}</p>
      </div>

      <div
        style={{
          width: "141px",
          marginLeft: "6px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>
          <span
            style={spanStyle("#008FA0", 700)}
          >{`$${props.trips.price}`}</span>
          <span style={spanStyle("#000", 700)}>/ visit</span>
        </p>

        <img src={like} alt="" />
      </div>
    </div>
  );
}

export default Trips;
