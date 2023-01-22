import "./App.css";
import Header from "./components/header/header.component";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
