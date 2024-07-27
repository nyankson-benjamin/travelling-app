import Navigations from "../Layouts/Navigations";
import Home from "../components/Home/Home";

function HomePage() {
  return (
    <div>
      <Navigations bgColor="#F7F7F7">
        <Home />
      </Navigations>
    </div>
  );
}

export default HomePage;
