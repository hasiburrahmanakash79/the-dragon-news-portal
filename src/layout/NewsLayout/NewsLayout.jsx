import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import RightNav from "../../components/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
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

export default NewsLayout;
