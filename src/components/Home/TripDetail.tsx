import { useNavigate, useParams } from "react-router-dom";
import { results } from "../../constants/images";
import { detailedStyle, textStyle, tripImages } from "../../styles/register";
import back from "../../assets/icons/back.svg";
import rate from "../../assets/icons/rate.svg";
import location from "../../assets/icons/location1.svg";
import GreenButton from "../Buttons/GreenButton";
import like from "../../assets/icons/like.svg";
function TripDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = results?.find((result) => result.id === Number(id));

  return (
    <div>
      <div
        onClick={() => {
          navigate("/");
        }}
        style={{ display: "flex", gap: 85 }}
      >
        <img src={back} alt="" style={{ cursor: "pointer" }} />
        <p style={textStyle("16px", "#1E1E1E", 700)}>{trip?.source}</p>
      </div>
      <div style={detailedStyle(trip?.image_url)}>
        <div style={tripImages}>
          {results.map((img) => (
            <div key={img.id} >
              <img src={img.image_url} style={tripImages.img} alt="trip-img"/>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <p style={textStyle("16px", "#1E1E1E", 700)}>{trip?.source}</p>

        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <img src={rate} alt="" width="21px" height="22px" />
          <p style={textStyle("17.73", "#636363", 400)}>{trip?.rate}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: 5 }}>
        <img src={location} alt="" />
        <p style={textStyle("15px", "#636363", 400)}>{trip?.country}</p>
      </div>

      <div>
        <p style={textStyle("15px", "#636363", 400)}>{trip?.description}</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <GreenButton
          text={`Book Now |$${trip?.price}`}
          color="#008FA0"
          buttonClick={() => {
            alert(`You have booked ${trip?.country}`);
          }}
        />

        <img
          src={like}
          alt=""
          width="33px"
          height="30px"
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
}

export default TripDetail;
