import React, { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
// import Questionnaire from "components/questionnaires/Questionnaire";
import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import background from "images/background.jpg";
import logo from "images/logo.svg";
import info from "images/info.svg";
import signin from "images/sign in.svg";
import depression from "images/Depression 2.svg";
import chronic from "images/Chronic fatigue 2.svg";
import insomnia from "images/Insomnia 2.svg";
import stress from "images/Stress 2.svg";
import mental from "images/Mental breakdown 2.svg";
import negative from "images/Negative Thinking 2.svg";
import Button from "@mui/material/Button";
import { storeContext } from "components/provider/Provider";
import { questionnaireActions } from "store/questionnaire-reducer";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "theme";
import Questionnaire from "../questionnaires/Questionnaire";

const FrontPage = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(storeContext);
  const [cookies] = useCookies(["auth"]);

  const handleCloseFirstQuestionnaire = () => {
    dispatch({
      type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
      payload: {
        openFirstQuestionnaire: false,
      },
    });
  };

  const handleCloseFirstResults = () => {
    dispatch({
      type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
      payload: {
        openFirstResults: false,
      },
    });
  };

  useEffect(() => {
    if (cookies.id) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Dialog
        open={state.questionnaire.openFirstResults}
        onClose={handleCloseFirstResults}
      >
        <DialogTitle>The Questionnaire Result</DialogTitle>
        <DialogContent>
          {state.questionnaire.recognized ? (
            <DialogContentText>
              You may show some symptoms which usually characterize depression
              but may also have other causes. <br /> <br />
              Don’t worry, regardless of the reasons, this may be solved. If you
              would like more guidance, we suggest you log in to our website and
              to do a more detailed, scientifically approved test to clarify
              your situation even more. Afterwards, you may log in to the
              community of people with similar concerns sharing them and doctors
              giving advice. You can choose to enter the community anonymously,
              not providing any of the personal details.
            </DialogContentText>
          ) : (
            <DialogContentText>
              Most probably, you are not likely to have depression, so nothing
              to worry about!
              <br />
              <br />
              Take care of your lifestyle, keep track of your sleeping schedule,
              food ration and sport activities, besides, do not forget to devote
              time to your hobbies and your loved ones. This helps to keep your
              physical and emotional state steady.
              <br />
              <br />
              However, raising your awareness could only help, so you may find
              it interesting to learn more about this condition and its early
              signs to take care about the mental health of you, your family and
              friends in the future. The following information may be useful:
              <br />
            </DialogContentText>
          )}
        </DialogContent>
        {state.questionnaire.recognized ? (
          <DialogActions>
            <Button onClick={handleCloseFirstResults}>Discard</Button>
            <Button onClick={handleCloseFirstResults}>Continue</Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button onClick={handleCloseFirstResults}>Close</Button>
            <Button onClick={handleCloseFirstResults}>More Information</Button>
          </DialogActions>
        )}
      </Dialog>
      <Grid
        container
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          minHeight: 650,
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link href="/">
              <img src={logo} alt="PURPose logo" width="240" />
            </Link>
            <Link href="/login" sx={{ margin: 3 }}>
              <img
                src={signin}
                alt="Sign in button"
                width="50"
                sx={{ margin: 3 }}
              />
            </Link>
            <Link href="/more-info" sx={{ margin: 3 }}>
              <img src={info} alt="More info" width="50" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={8} mb={20}>
          <Typography
            component="h2"
            variant="h2"
            maxWidth="50%"
            fontWeight={700}
            marginBottom={10}
            margin="auto"
            textAlign="center"
          >
            Do you want to find more about yourself?
          </Typography>
        </Grid>
      </Grid>
      <Grid container p={3} sx={{ width: "100%", backgroundColor: "#F0FDFD" }}>
        <Typography component="p" variant="h5">
          We are the{" "}
          <span style={{ color: theme.palette.primary.main, fontWeight: 700 }}>
            PURPose
          </span>{" "}
          who tries to help you in your self-discovery. If the answer to the
          previous question is YES, then keep scrolling down.{" "}
        </Typography>
        <Chip
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            fontSize: 25,
            padding: "25px",
            borderRadius: "50px",
            marginTop: 10,
          }}
          label="Check the following illustrations. Would you say that most of them reflect your current state?"
        />
        <Box
          mt={7}
          display="flex"
          flexWrap="wrap"
          width="100%"
          justifyContent="center"
        >
          <img src={chronic} alt="Chronic Fatigue" />
          <img src={depression} alt="Depression" />
          <img src={insomnia} alt="Insomnia" />
          <img src={stress} alt="Stress" />
          <img src={mental} alt="Mental Breakdown" />
          <img src={negative} alt="Negative Thinking" />
        </Box>
        <Typography component="p" variant="h5" marginTop={5}>
          If YES then click the button below!
        </Typography>
        <Box textAlign="center" width="100%" mt={2}>
          <Button
            variant="contained"
            sx={{
              fontSize: 40,
              textTransform: "capitalize",
              padding: "15px 40px",
              borderRadius: 50,
              marginBottom: "30px",
            }}
            onClick={() => {
              dispatch({
                type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
                payload: {
                  openFirstQuestionnaire: true,
                },
              });
            }}
          >
            Questionnaire
          </Button>
        </Box>
        <Box width="100%">
          <Chip
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "white",
              fontSize: 25,
              padding: "25px",
              borderRadius: "50px",
              height: "100%",
              whiteSpace: "normal",
              "& .MuiChip-label": {
                whiteSpace: "normal",
              },
            }}
            component="div"
            label={
              <section>
                <div>
                  There are 280 million people in the world feeling the same
                  things.{" "}
                </div>
                <div>
                  The reason you are feeling this way could be due to multiple
                  factors. Did you know that genetic factors could be one factor
                  for this? Or a potential cause can be if you have some
                  cardiovascular disease.{" "}
                </div>
                <div>
                  The way our body functions is amazing. The physical health and
                  mental health are deeply rooted with each other.
                </div>
              </section>
            }
          />
        </Box>
      </Grid>
      <Dialog
        open={state.questionnaire.openFirstQuestionnaire}
        onClose={handleCloseFirstQuestionnaire}
      >
        <Questionnaire id={1} directionRow />
      </Dialog>
    </>
  );
};

export default FrontPage;
