import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import PropTypes from "prop-types";
import Loader from "shared/components/Loader";
import { Typography } from "@material-ui/core";
import { useCookies } from "react-cookie";
import Question from "./Question";
import { storeContext } from "../provider/Provider";
import { questionnaireActions } from "../../store/questionnaire-reducer";

const { REACT_APP_SITE_URL } = process.env;
const Questionnaire = ({ title, subtitle, id, directionRow }) => {
  const [questions, setQuestions] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [cookies] = useCookies(["auth"]);

  const { state, dispatch } = useContext(storeContext);

  useEffect(() => {
    axios.get(`${REACT_APP_SITE_URL}/api/questionnaires/${id}`).then((res) => {
      if (res.status === 200) {
        setQuestions(res.data.questions);
        setFetching(false);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let data;
    if (cookies.id) {
      data = { questionnaire_id: id, user_id: state.auth.user.id };
    } else {
      data = { questionnaire_id: id };
    }
    axios
      .post(`${REACT_APP_SITE_URL}/api/submissions`, data)
      .then(async (res) => {
        if (res.status === 201) {
          const subId = res.data.id;
          await Promise.all(
            questions.map((answer) =>
              axios.post(`${REACT_APP_SITE_URL}/api/choices`, {
                submission_id: subId,
                answer_id: Number(formData.get(`answer-${answer.id}`)),
              })
            )
          );
          axios
            .get(`${REACT_APP_SITE_URL}/api/submissions/${subId}`)
            .then((submission) => {
              if (submission.status === 200) {
                dispatch({
                  type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
                  payload: {
                    ranking: submission.data.ranking,
                    recognized: submission.data.recognized,
                  },
                });
              }
            });
          if (id === 1) {
            dispatch({
              type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
              payload: {
                openFirstQuestionnaire: false,
              },
            });
            dispatch({
              type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
              payload: {
                openFirstResults: true,
              },
            });
          } else {
            dispatch({
              type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
              payload: {
                openSecondQuestionnaire: false,
              },
            });
            dispatch({
              type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
              payload: {
                openSecondResults: true,
              },
            });
          }
        }
      });
  };

  if (isFetching) {
    return (
      <Box position="relative">
        <Loader />
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="h2" variant="h4">
          {title}
        </Typography>

        <Typography component="p" variant="inherit">
          {subtitle}
        </Typography>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            directionRow={directionRow}
          />
        ))}
        <Button type="submit">Submit Answers</Button>
      </Paper>
    </Box>
  );
};

Questionnaire.propTypes = {
  id: PropTypes.number.isRequired,
  directionRow: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Questionnaire.defaultProps = {
  directionRow: false,
  title: "",
  subtitle: "",
};

export default Questionnaire;
