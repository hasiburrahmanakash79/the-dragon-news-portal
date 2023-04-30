import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavigationBar = () => {
  const user = useContext(AuthContext);

  return (
    <Container>
      <div className="my-4">
        <Nav aria-controls="responsive-navbar-nav" />
        <Nav id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Link
              to="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              to="/career"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Career
            </Link>
          </Nav>
          <Nav className="gap-3">
            {user && (
              <FaUserCircle style={{ fontSize: "2.5rem" }}></FaUserCircle>
            )}

            {user ? (
              <Button className="px-3" variant="dark">
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button className="px-3" variant="dark">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Nav>
      </div>
    </Container>
  );
};

export default NavigationBar;
