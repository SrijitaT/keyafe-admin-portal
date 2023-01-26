import jwt_decode from "jwt-decode";

const decryptToken = (token) => {
  return jwt_decode(token);
};

export default decryptToken;
