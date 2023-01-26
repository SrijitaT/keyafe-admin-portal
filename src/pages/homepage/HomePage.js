import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import SignIn from "../../components/signin-admin/signIn.component";

const HomePage = () => {
  const ref = useRef(null);

  const handleEnded = () => {
    ref.current.currentTime = 0;
    ref.current.play();
  };
  return (
    <div>
      <Row>
        <Col md={6} lg={7}>
          <video
            ref={ref}
            loop={true}
            controls={false}
            autoPlay
            onEnded={handleEnded}
            style={{
              width: "100%",
              height: "90%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            <source src="/VID-20230123-WA0000.mp4" type="video/mp4" />
          </video>
        </Col>
        <Col md={6} lg={5}>
          <SignIn />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
