import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from "../../QZone/QZone";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div className="my-3">
      <div>
        <h3>Login with</h3>
        <Link to='/login'><Button className="w-100" variant="outline-primary"> <FaGoogle /> Login with Google</Button></Link> <br />
        <Link to='/login'><Button className="w-100 mt-2" variant="outline-secondary"> <FaGithub /> Login with GitHub</Button></Link>
      </div>
      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
