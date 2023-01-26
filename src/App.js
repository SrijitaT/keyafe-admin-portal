import "./App.css";
import Header from "./components/header/header.component";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import { signOutSuccess } from "./redux/admin/admin.action";
import DashBoard from "./pages/dashboard-pages/DashBoard";
import ShapePage from "./pages/dashboard-pages/shape-page/ShapePage";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/protected-routes/protected-route.component";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  if (currentUser && currentUser.exp) {
    const currentTime = Date.now() * 7200000;
    if (currentUser.exp > currentTime || !currentUser) {
      dispatch(signOutSuccess());
      window.location.href = "/";
    }
  }

  return (
    <Container fluid>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            {/* <Route
              path={currentUser ? "/dashboard" : "/"}
              element={
                currentUser ? (
                  <ProtectedRoute>
                    <DashBoard />
                  </ProtectedRoute>
                ) : (
                  <HomePage />
                )
              }
            /> */}

            <Route path="/shape" exact element={<ShapePage />} />
            <Route
              path="/dashboard"
              exact
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
