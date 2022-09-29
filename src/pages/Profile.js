import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <StyledWrapper>
      <StyledDiv>
        <section>
          <Typography variant="h2">Elisabet Österberg Jansson</Typography>
          <Button color="secondary" variant="contained">
            Logga ut
          </Button>
        </section>
        <section>
          <Typography variant="h1">
            Det här är en jättebra försäkring av det allra bästa slag!
          </Typography>
          <Typography variant="h3">Beskrivning av försäkring</Typography>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesett
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </section>
      </StyledDiv>
    </StyledWrapper>
  );
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
