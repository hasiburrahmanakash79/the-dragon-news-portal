
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const user = useContext(AuthContext)
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
            <Link to="/" className="text-dark" style={{textDecoration: 'none'}}>Home</Link>
            <Link to="/about" className="text-dark" style={{textDecoration: 'none'}}>About</Link>
            <Link to="/career" className="text-dark" style={{textDecoration: 'none'}}>Career</Link>
          </Nav>
          <Nav className="gap-3">
            {user && <FaUserCircle style={{fontSize:"2.5rem"}}></FaUserCircle>}

            {user ? <Button className="px-3" variant="dark">Log Out</Button> : 
            <Link to="/login">
              <Button className="px-3" variant="dark">Login</Button>
            </Link>
            }
          </Nav>
        </Nav>
      </div>

    </Container>
  );
};

export default Navbar;
