import { LocationStyles, textStyle } from "../styles/register";
import notification from "../assets/icons/notification.svg";
import { results } from "../constants/images";
import map from "../assets/icons/map.svg";
import location from "../assets/icons/location2.svg";
import send from "../assets/icons/image-13.svg";

function Locations() {
  const image = results[0];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ marginTop: "-50px" }}>
            <p style={textStyle("36px", "#1E1E1E", 700)}>Explore</p>
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: "-30px" }}>
            {new Array(5).fill("items").map((_idx, id) => (
              <div style={LocationStyles.trans(id)}></div>
            ))}
          </div>
        </div>
        <img src={notification} alt="" />
      </div>

      <div style={LocationStyles.bg(`${image.image_url}`)}>
        <p style={textStyle("20px", "#fff", 600)}>{image.country}, Accra</p>
        <p style={textStyle("15px", "#fff", 600)}>12.4km</p>
      </div>
      <div style={LocationStyles.bg(map)}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={location} alt="" style={{ width: "35.972px" }} />
            <div style={{ textAlign: "center", width: "100px" }}>
              <p style={textStyle("11px", "#1E1E1E", 400)}>{image.country}</p>
              <p style={textStyle("11px", "#8E8E8E", 400)}>Your Location</p>
            </div>
          </div>
        </div>
        <div style={LocationStyles.send}>
          <img src={send} alt="" />
          <p style={textStyle("13px", "#fff", 400)}>Start</p>
        </div>
      </div>
    </div>
  );
}

export default Locations;
