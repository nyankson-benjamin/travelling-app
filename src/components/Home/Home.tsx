import { textStyle, toggleStyle } from "../../styles/register";
import location from "../../assets/icons/location1.svg";
import notification from "../../assets/icons/notification.svg";
import toggle from "../../assets/icons/toggle.svg";
import lakes from "../../assets/icons/lakes.svg";
import sea from "../../assets/icons/sea.svg";
import mountain from "../../assets/icons/mountain.svg";
import forest from "../../assets/icons/forest.svg";
import SearchInput from "../FormInputs/SearchInput";
import Categories from "./Categories";
import { results } from "../../constants/images";
import Trips from "./Trips";
import { Link } from "react-router-dom";
import { useState } from "react";
import GroupTrips from "./GroupTrips";

function Home() {
  const categories = [
    { name: "Lakes", icon: lakes },
    { name: "Sea", icon: sea },
    { name: "Mountain", icon: mountain },
    { name: "Forest", icon: forest },
  ];

  const [seeAllTrips, setSeeAllTrips] = useState<boolean>(false);
  return (
    <div>
      <p style={textStyle("16px", "#636363", 400)}>Location</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, marginTop: "-15px" }}>
          <img src={location} alt="" />
          <p style={textStyle("16px", "#323232", 600)}>New York, USA</p>
        </div>
        <img src={notification} alt="" style={{ marginTop: "-18px" }} />
      </div>
      <div style={{ display: "flex" }}>
        <SearchInput />
        <div style={toggleStyle}>
          <img src={toggle} alt="" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={textStyle("16px", "#1E1E1E", 700)}>Categories</p>
        <p style={textStyle("14px", "#A2A2A2", 400)}>See All</p>
      </div>

      <div style={{ display: "flex", gap: 5 }} className="categories">
        {categories.map((category, idx) => (
          <Categories categories={category} key={idx} idx={idx} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={textStyle("16px", "#1E1E1E", 700)}>Top Trips</p>
        <p
          style={textStyle("14px", "#A2A2A2", 400)}
          className="see"
          onClick={() => setSeeAllTrips((prev) => !prev)}
        >
          {seeAllTrips ? <span>See Less</span> : <span> See All</span>}
        </p>
      </div>

      {seeAllTrips ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
            gridGap: "20px",
            marginBottom: "20px",
            height: "300px",
            overflowY: "scroll",
          }}
          className="trips"
        >
          {results.map((result, idx) => (
            <Link to={`/trip/${result.id}`}>
              <Trips trips={result} key={idx} />
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", gap: 10 }} className="trips">
          {results.map((result, idx) => (
            <Link to={`/trip/${result.id}`}>
              <Trips trips={result} key={idx} />
            </Link>
          ))}
        </div>
      )}

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={textStyle("16px", "#1E1E1E", 700)}>Group Trips</p>
          <p style={textStyle("14px", "#A2A2A2", 400)}>See All</p>
        </div>

        <GroupTrips />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
