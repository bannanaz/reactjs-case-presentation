import { withSnackbar } from "../components/ErrorSnackbar";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = (props) => {
  const [insurances, setInsurances] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  //Get current user object from localstorage
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const getInsuranceIds = async () => {
    //Get all users insurance ids from database
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/user_insurances"
      );
      let data = response.data;
      //Get current users insurance ids
      let activeInsuranceId = data[user.id];
      getActiveInsurances(activeInsuranceId);
    } catch (error) {
      props.showErrorSnackbar(
        "Kunde inte hämta dina försäkringar! " + error.message
      );
      setIsLoading(false);
    }
  };

  const getActiveInsurances = async (id) => {
    //Get insurance descriptions from database
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/proactivehealth/work-test-sample/insurances"
      );
      let data = response.data;
      //Filter out current users insurances
      let activeInsurances = data.filter(function (item) {
        return id.indexOf(item.id) !== -1;
      });
      //Save insurances to state for rendering
      setInsurances(activeInsurances);
      setIsLoading(false);
    } catch (error) {
      props.showErrorSnackbar(
        "Kunde inte hämta dina försäkringar! " + error.message
      );
      setIsLoading(false);
    }
  };

  //Get current users insurances on mount
  useEffect(() => {
    getInsuranceIds();
  }, []);

  //Redirect to login page if user logs out, empty localstorage
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    history.push("/");
  };

  return user ? (
    <StyledWrapper>
      <div>
        <section>
          <Typography variant="h2">{user.name}</Typography>
          <Button color="secondary" variant="contained" onClick={handleLogout}>
            Logga ut
          </Button>
        </section>
        {isLoading ? (
          <StyledDiv>
            <CircularProgress color="secondary" />
          </StyledDiv>
        ) : insurances ? (
          insurances.map((item) => (
            <StyledSection key={item.id}>
              <Typography variant="h1">{item.title}</Typography>
              <Typography variant="h3">{item.preamble}</Typography>
              <Typography variant="body1">{item.body}</Typography>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                color="neutral"
                variant="contained"
                sx={{
                  marginTop: "17px",
                  marginBottom: "0px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                Läs mer
              </Button>
            </StyledSection>
          ))
        ) : (
          <Typography variant="h2">Inga försäkgringar hittades.</Typography>
        )}
      </div>
    </StyledWrapper>
  ) : (
    history.push("/")
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  div {
    background-color: white;
    min-height: 100vh;
    margin-top: 40px;
    padding: 25px 35px;
    border-radius: 15px;
    width: 650px;
    box-shadow: 7px 12px 30px #346980;
    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 500px) {
      padding: 35px 20px 35px 20px;
    }
  }

  section:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 0px 20px 25px;
    background: none;
    @media (max-width: 500px) {
      padding: 0px 0px 20px 0px;
    }
  }
`;

const StyledSection = styled.section`
  background: #ecf4f8;
  padding: 30px 25px;
  margin: 0px 0px 20px 0px;
  border-radius: 10px;
  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`;
const StyledDiv = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export default withSnackbar(Profile);
