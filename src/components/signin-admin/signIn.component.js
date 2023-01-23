import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-in.styles.scss";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formFields;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>Admin Sign In</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <Row>
          <Col md={10}>
            <FormInput
              label="Password"
              type={isPasswordVisible ? "text" : "password"}
              required
              onChange={handleChange}
              name="password"
              value={password}
            />
          </Col>
          <Col md={2} style={{ marginTop: "10%" }}>
            <span onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </Col>
        </Row>

        <div className="buttons">
          <Button isLoading={isLoading} type="submit">
            Sign In
          </Button>
          {/* <span style={{ fontWeight: "bold" }}>
            <Link to="/users/reset-password">Forgot Password?</Link>
          </span> */}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
