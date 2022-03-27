import React, { useContext, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import PropTypes from "prop-types";
import Loader from "shared/components/Loader";
import Question from "./Question";
import { storeContext } from "../provider/Provider";
import { questionnaireActions } from "../../store/questionnaire-reducer";

const { REACT_APP_SITE_URL } = process.env;
const Questionnaire = ({ id, directionRow }) => {
  const [questions, setQuestions] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const { dispatch } = useContext(storeContext);

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
    axios
      .post(`${REACT_APP_SITE_URL}/api/submissions`, {
        questionnaire_id: id,
      })
      .then(async (res) => {
        if (res.status === 201) {
          const subId = res.data.id;
          await Promise.all(
            questions.map((answer) =>
              axios
                .post(`${REACT_APP_SITE_URL}/api/choices`, {
                  submission_id: subId,
                  answer_id: Number(formData.get(`answer-${answer.id}`)),
                })
                .then((choice) => {
                  if (choice.status === 201) {
                    dispatch({
                      type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
                      payload: {
                        recognized: choice.data.questionnaire_recognized,
                      },
                    });
                  }
                })
            )
          );
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
};

Questionnaire.defaultProps = {
  directionRow: false,
};

export default Questionnaire;
