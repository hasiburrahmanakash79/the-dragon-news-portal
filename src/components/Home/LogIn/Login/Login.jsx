import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  const handleLogin = event =>{
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser); 
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="bg-light p-5">
      <Form onSubmit={handleLogin} className="w-50 rounded p-5 mx-auto bg-white"> 
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
