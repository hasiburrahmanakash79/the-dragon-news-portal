import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavigationBar from "../NavigationBar/NavigationBar";

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
      <NavigationBar></NavigationBar>

    </Container>
  );
};

export default Navbar;
