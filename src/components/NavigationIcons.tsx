import home from "../assets/icons/home.svg";
import home1 from "../assets/icons/home1.svg";
import love from "../assets/icons/love.svg";
import love1 from "../assets/icons/love1.svg";
import location from "../assets/icons/location.svg";
import message from "../assets/icons/message.svg";
import message1 from "../assets/icons/message1.svg";
import person from "../assets/icons/person.svg";
import person1 from "../assets/icons/person1.svg";
import { navigationIconsStyles } from "../styles/register";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import location1 from "../assets/icons/location3.svg";
import { useLocation } from "react-router-dom";

function NavigationIcons() {
  const icons = [
    { route: "/", icon: home, alt: "home", alter: home1 },
    { route: "/location", icon: location, alt: "location", alter: location1 },
    { route: "/message", icon: message, alt: "message", alter: message1 },
    { route: "/event", icon: love, alt: "event", alter: love1 },
    { route: "/profile", icon: person, alt: "profile", alter: person1 },
  ];

  const locations = useLocation();
  const activeRoute =
    locations.pathname.slice(1).length > 2
      ? locations.pathname.slice(1)
      : "home";

  useEffect(() => {
    !activeRoute && localStorage.setItem("route", "home");
  });

  return (
    <div style={navigationIconsStyles()}>
      {icons.map((icon, idx) => (
        <div>
          <Link to={icon.route} key={idx}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <img
                src={activeRoute === `${icon.alt}` ? icon.alter : icon.icon}
                alt={icon.alt}
                style={{ padding: "5px", width: "20px", height: "20px" }}
                className={
                  activeRoute === `${icon.alt}`
                    ? `icon-${activeRoute}`
                    : undefined
                }
              />
              {activeRoute === `${icon.alt}` && (
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    background: "#008FA0",
                    borderRadius: "100px",
                  }}
                ></div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NavigationIcons;
