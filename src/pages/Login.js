import * as React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <StyledDiv>
      <form>
        <Typography variant="h1">Logga in med ditt användarnamn</Typography>
        <TextField
          fullWidth
          color="secondary"
          id="username"
          label="Ange ditt användarnamn"
          variant="outlined"
        ></TextField>
        <Button variant="contained" color="secondary">
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
