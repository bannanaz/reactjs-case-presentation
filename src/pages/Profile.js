import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const insurances = JSON.parse(localStorage.getItem("userInsurances"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userInsurances");
    history.push("/");
  };
  if (!user) {
    history.push("/");
  } else {
    return (
      <StyledWrapper>
        <StyledDiv>
          <section>
            <Typography variant="h2">{user.name}</Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleLogout}
            >
              Logga ut
            </Button>
          </section>
          {insurances.map((item) => (
            <section key={item.id}>
              <Typography variant="h1">{item.title}</Typography>
              <Typography variant="h3">{item.preamble}</Typography>
              <Typography variant="body1">{item.body}</Typography>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                color="primary"
                size="small"
                variant="contained"
              >
                Läs mer
              </Button>
            </section>
          ))}
        </StyledDiv>
      </StyledWrapper>
    );
  }
};
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const StyledDiv = styled.div`
  background-color: white;
  padding: 35px;
  border-radius: 15px;
  width: 600px;
  height: auto;
  margin: 0px;
  box-shadow: 7px 12px 30px #346980;
  @media (max-width: 900px) {
    width: 80%;
    margin: 0px;
  }
  @media (max-width: 500px) {
    padding: 35px 20px 35px 20px;
  }

  section:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 0px 30px 25px;
    background: none;
    @media (max-width: 500px) {
      padding: 0px 0px 20px 0px;
    }
  }
  section {
    background: #ecf4f8;
    padding: 25px;
    border-radius: 10px;
    @media (max-width: 500px) {
      padding: 30px 20px;
    }
  }
`;
export default Profile;
