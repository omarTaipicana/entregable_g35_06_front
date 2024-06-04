import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HotelsIdPage from "./pages/HotelsIdPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { getHotelsThunk } from "./store/states/hotels.slice";
import { useEffect } from "react";
import PrincipalHeader from "./components/shared/PrincipalHeader";
import ReservationPage from "./pages/ReservationPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();
  const url = "https://entregable-g35-06.onrender.com/hotels";

  useEffect(() => {
    dispatch(getHotelsThunk(url));
  }, []);

  return (
    <div>
      <PrincipalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelsIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element = {<ProtectedRoutes/>}>
          <Route path="/reservations" element={<ReservationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
