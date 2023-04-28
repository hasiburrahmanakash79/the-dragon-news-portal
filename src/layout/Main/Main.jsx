import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import LeftNav from "../../components/Shared/LeftNav/LeftNav";
import RightNav from "../../components/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h1>main content coming soon.....</h1>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
