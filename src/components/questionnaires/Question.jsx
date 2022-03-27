import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";

const Question = ({ question, directionRow }) => (
  <FormControl sx={{ marginBottom: 5 }}>
    <Typography component="h3" variant="h5">
      {question.text}
    </Typography>
    <Divider sx={{ m: 1 }} />
    <RadioGroup row={directionRow} name={`answer-${question.id}`}>
      {question.answers.map((answer) => (
        <FormControlLabel
          key={answer.id}
          value={answer.id}
          control={<Radio required />}
          label={answer.text}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }).isRequired,
  directionRow: PropTypes.bool,
};

Question.defaultProps = {
  directionRow: false,
};
export default Question;
