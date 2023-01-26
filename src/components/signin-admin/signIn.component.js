import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-in.styles.scss";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { emailPhoneSignInStart } from "../../redux/admin/admin.action";
import axiosInterceptor from "../../utils/api/axiosInterceptor";
import decryptToken from "../../utils/token-decryption/decryptToken";

const defaultFormFields = {
  email_id: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { email_id, password } = formFields;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInterceptor.post(
        "admin/login",
        {
          email_id: email_id,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const { type, token } = response;
      console.log("sign in response", response);
      if (type == "success") {
        dispatch(emailPhoneSignInStart(token));
        console.log("token", decryptToken(token));
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        alert("Only admins are allowed to login");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Only admins are allowed to login");
          break;
        default:
          console.log(error);
      }
    }
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
          name="email_id"
          value={email_id}
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
