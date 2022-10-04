import * as React from "react";
import { withSnackbar } from "../components/ErrorSnackbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [helperText, setHelperText] = useState("");
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  //Save input to state and remove errors on input
  const handleInput = (e) => {
    setUserName(e.target.value);
    if (errors && helperText) {
      setHelperText("");
      setErrors(false);
    }
  };

  //Validate input on blur, if no username show error
  const handleValidation = () => {
    if (!userName) {
      setHelperText("Vänligen ange ditt användarnamn");
      setErrors(true);
    }
  };

  const loginUser = async () => {
    //Get all users from database
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/users/"
      );
      //Check if user exists and get userobject
      let data = response.data;
      const userObj = data.find((element) => element.login === userName);
      redirectUser(userObj);
      //If user exists, save user to localstorage and redirect to profile page
    } catch (error) {
      //Show error snackbar from ErrorSnackbar component
      props.showErrorSnackbar(
        "Användaren kunde inte hämtas, försök igen! " + error.message
      );
    }
  };

  //Redirect to profile page and save user object to localstorage
  const redirectUser = (user) => {
    if (user) {
      history.push("/profile");
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      setHelperText("Användaren finns inte, försök igen!");
      setErrors(true);
    }
  };

  //Submit login form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      loginUser();
    } else {
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
          onBlur={handleValidation}
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

export default withSnackbar(Login);
