import "./App.css";
import Header from "./components/header/header.component";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInAdmin from "./pages/sign-in/SignInAdmin";
import HomePage from "./pages/homepage/HomePage";
import AdminDashboard from "./components/admin-dashboard/admin-dashboard.component";
import DashBoard from "./pages/dashboard-pages/DashBoard";
import ShapePage from "./pages/dashboard-pages/shape-page/ShapePage";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            {/* <Route path="/signin" exact element={<SignInAdmin />} /> */}
            <Route path="/" exact element={<HomePage />} />

            {/* <Route
              path="/admin-dashboard/:pages"
              exact
              render={(props) => <AdminDashboard {...props} />}
            /> */}
            <Route path="/shape" exact element={<ShapePage />} />
            <Route path="/dashboard" exact element={<DashBoard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
