import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-in.styles.scss";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formFields;
  //   const resetFormFields = () => {
  //     setFormFields(defaultFormFields);
  //   };
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
      <h2>I already have an account</h2>
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

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
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
