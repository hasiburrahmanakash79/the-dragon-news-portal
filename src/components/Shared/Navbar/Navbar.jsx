import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img className="py-4" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="fw-bold text-xl">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="bg-light p-3 d-flex gap-5">
        <Button className="px-3 fw-semibold" variant="danger">
          Latest
        </Button>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div className="my-4">
      <Nav aria-controls="responsive-navbar-nav" />
        <Nav id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4" >
            <Link className="text-dark" style={{textDecoration: 'none'}} href="">Home</Link>
            <Link className="text-dark" style={{textDecoration: 'none'}} href="">About</Link>
            <Link className="text-dark" style={{textDecoration: 'none'}} href="">Career</Link>
          </Nav>
          <Nav className="gap-3">
            <h4>image</h4>
            <Button className="px-3" variant="dark">Login</Button>
          </Nav>
        </Nav>
      </div>

    </Container>
  );
};

export default Navbar;
