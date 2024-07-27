import { results } from "../../constants/images";
import { textStyle, topTrips } from "../../styles/register";
import location from "../../assets/icons/location.svg";

function GroupTrips() {
  const image = results[0];
  const images = results.slice(0, 5);
  const imgLength = results.length * 6;
  return (
    <div style={topTrips}>
      <img src={image.image_url} alt="" style={topTrips.img} />
      <div style={topTrips.div1}>
        <p style={textStyle("14px", "#1E1E1E", 600)}>Mountain Trip</p>
        <p style={textStyle("12px", "#636363", 400)}>{image.source}</p>
        <div style={topTrips.div2}>
          <img src={location} alt="" style={topTrips.icon} />
          <p style={textStyle("11px", "#636363", 400)}>{image.country}</p>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            {images.map((image, idx) => (
              <div key={idx}>
                <img
                  src={image.image_url}
                  alt=""
                  style={topTrips.people(idx)}
                />
              </div>
            ))}
            <p style={textStyle("3.92px", "#1E1E1E", 400)}>
              {results.length} + Orders
            </p>
          </div>
        </div>
        <div style={{ marginTop: "-20px", paddingBottom:"20px" }}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <p style={textStyle("9px", "#008FA0", 700)}>{`${imgLength}%`}</p>
          </div>

          <div style={topTrips.progressBar("164px", "#AFAFAF")}>
            <div style={topTrips.progressBar(`${imgLength}%`, "#008FA0")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupTrips;
