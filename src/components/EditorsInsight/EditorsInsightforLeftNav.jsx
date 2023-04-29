import { Card, Col, Row } from "react-bootstrap";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import { FaCalendar } from "react-icons/fa";

const EditorsInsightforLeftNav = () => {
  return (
    <div>
      <Row lg={1} className="mt-3">
        <Col className="mb-2">
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <div className="d-flex justify-content-between">
                <p className="m-0">Sports</p>
                <div className="d-flex align-items-center gap-2">
                  <FaCalendar></FaCalendar>
                  <p className="m-0">Jan 4, 2022</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <div className="d-flex justify-content-between">
                <p className="m-0">Sports</p>
                <div className="d-flex align-items-center gap-2">
                  <FaCalendar></FaCalendar>
                  <p className="m-0">Jan 4, 2022</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-2">
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <div className="d-flex justify-content-between">
                <p className="m-0">Sports</p>
                <div className="d-flex align-items-center gap-2">
                  <FaCalendar></FaCalendar>
                  <p className="m-0">Jan 4, 2022</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsightforLeftNav;
