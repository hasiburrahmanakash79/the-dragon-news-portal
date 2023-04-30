import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-light p-5">
      <Form className="w-50 rounded p-5 mx-auto bg-white">
        <h2 className="text-center fw-bold pb-2">Registration your account</h2>
        <hr className="py-2" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="condition" label="Accept Term & Conditions" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="w-100">
          Register
        </Button>
        <br />
        <p className="text-muted text-center mt-3">
          Already Have An Account ? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
