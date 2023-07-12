import React from "react";
import { Card } from "react-bootstrap";
import { Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./card.styles.scss";

const CustomCard = ({ headerInfo, info }) => {
  return (
    <Card className="info-card">
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{headerInfo}</Card.Title>
        {info === 0 ? (
          <Card.Text>
            <Placeholder.Paragraph />
          </Card.Text>
        ) : (
          <Card.Text className="info-card-content">{info}</Card.Text>
        )}
        {/* <Card.Text>{count ? count : <Placeholder.Paragraph />}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
