import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import Login from "./pages/SignIn";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import TripDetails from "./pages/TripDetails";
import Location from "./pages/Location";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default App;
