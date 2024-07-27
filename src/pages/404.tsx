import Navigations from "../Layouts/Navigations";
import { useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div>
      <Navigations bgColor="">
        <div>{location.pathname.slice(1)} Page Not Found</div>
      </Navigations>
    </div>
  );
}

export default NotFound;
