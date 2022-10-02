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
        <div>
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
          {insurances ? (
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
            <Typography variant="h1">Inga försäkringar hittades!</Typography>
          )}
        </div>
      </StyledWrapper>
    );
  }
};
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  div {
    background-color: white;
    margin-top: 40px;
    padding: 25px 35px;
    border-radius: 15px;
    width: 650px;
    height: auto;
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
export default Profile;
