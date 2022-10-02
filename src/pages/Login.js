import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [helperText, setHelperText] = useState("");
  const [errors, setErrors] = useState(false);

  const history = useHistory();

  const handleInput = (e) => {
    setUserName(e.target.value);
    if (errors && helperText) {
      setHelperText("");
      setErrors(false);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users/"
      );
      let data = response.data;
      const userData = data.find((element) => element.login === userName);
      if (userData) {
        localStorage.setItem("currentUser", JSON.stringify(userData));
        getActiveInsuranceIds(userData.id);
      } else {
        setHelperText("Felaktigt användarnamn, försök igen!");
        setErrors(true);
      }
    } catch (error) {
      // Handle Error Here
      console.log(error);
    }
  };

  const getActiveInsuranceIds = async (id) => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances"
      );
      let data = response.data;
      let activeInsuranceId = data[id];
      getActiveInsurances(activeInsuranceId);
    } catch (error) {
      // Handle Error Here
      console.log(error);
    }
  };

  const getActiveInsurances = async (id) => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances"
      );
      let data = response.data;
      console.log(data);
      let activeInsurances = data.filter(function (item) {
        return id.indexOf(item.id) !== -1;
      });
      localStorage.setItem("userInsurances", JSON.stringify(activeInsurances));
      history.push("/profile");
    } catch (error) {
      // Handle Error Here
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      getUserData();
    } else {
      setHelperText("Användarnamn saknas!");
      setErrors(true);
    }
  };

  const validateInput = () => {
    if (userName === "") {
      setHelperText("Användarnamn saknas!");
      setErrors(true);
    }
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">Logga in med ditt användarnamn</Typography>
        <TextField
          fullWidth
          color="secondary"
          label="Ange ditt användarnamn"
          variant="outlined"
          name="userName"
          onInput={handleInput}
          onBlur={validateInput}
          error={errors}
          helperText={helperText}
        ></TextField>
        <Button variant="contained" color="secondary" type="submit">
          Logga in
        </Button>
      </form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
  background-color: white;
  padding: 35px 35px 25px 35px;
  border-radius: 15px;
  width: 600px;
  height: auto;
  box-shadow: 7px 12px 30px #346980;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    padding: 25px 20px 20px 20px;
  }
`;

export default Login;
