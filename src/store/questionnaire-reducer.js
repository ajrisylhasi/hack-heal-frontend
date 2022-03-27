const initialQuestionnaireState = {
  openFirstResults: false,
  openSecondResults: false,
  recognized: false,
  ranking: null,
  openFirstQuestionnaire: false,
  openSecondQuestionnaire: false,
};

const questionnaireActions = {
  QUESTIONNAIRE_SET_ALL: "QUESTIONNAIRE_SET_ALL",
  CLEAR_QUESTIONNAIRE: "CLEAR_QUESTIONNAIRE",
};

function questionnaireReducer(state, action) {
  switch (action.type) {
    case questionnaireActions.QUESTIONNAIRE_SET_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case questionnaireActions.CLEAR_QUESTIONNAIRE:
      return {
        ...initialQuestionnaireState,
      };
    default:
      return state;
  }
}

export {
  initialQuestionnaireState,
  questionnaireActions,
  questionnaireReducer,
};
