import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-light p-5">
      <Form className="w-50 rounded p-5 mx-auto bg-white"> 
      <h2 className="text-center fw-bold pb-2">Login your account</h2>
      <hr className="py-2"/>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="secondary" type="submit" className="w-100">
          Log In
        </Button>
        <br />
        <p className="text-muted text-center mt-3">
          Do not Have An Account ? <Link to='/register'>Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
