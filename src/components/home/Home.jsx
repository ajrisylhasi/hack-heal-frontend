import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Questionnaire from "components/questionnaires/Questionnaire";
import { storeContext } from "components/provider/Provider";
import { questionnaireActions } from "store/questionnaire-reducer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HomeContent = () => {
  const { state, dispatch } = useContext(storeContext);

  const handleCloseSecondQuestionnaire = () => {
    dispatch({
      type: questionnaireActions.QUESTIONNAIRE_SET_ALL,
      payload: {
        openSecondResults: false,
      },
    });
  };

  return (
    <Grid container spacing={3}>
      {!state.questionnaire.openSecondResults && (
        <Box px={4}>
          {state.questionnaire.ranking === 1 && (
            <Typography component="p" variant="h5">
              Don’t worry! The changes in your mood are completely normal. Some
              advice may help:
              <br />
              <br />• It&lsquo;s important to understand that feeling depressed
              doesn&lsquo;t mean you have depression.
              <br />
              <br />• Keep a log of any mood changes and symptoms you are
              experiencing and look for patterns in a journal.
              <br />
              <br />• Consider bringing a supportive family member or friend to
              your health care visits. Talk with your doctor about any questions
              you have, as understanding your disease and treatment plan can
              help reduce uncertainty.
              <br />
              <br />• Create a routine that includes a variety of relaxation
              techniques such as muscle relaxation, massage, prayer,
              mindfulness, meditation, yoga or listening to calming music.
              <br />
              <br />• Check in with yourself often. Concentrate on positive
              thoughts and emotions.
              <br />
              <br />• If your distress, anxiety, or depression is persistent,
              ask your doctor about starting counseling, cognitive behavioral
              therapy, music therapy, or guided imagery.
              <br />
              <br />• Nutritional issues can underlie depression. Work with your
              health care provider to develop a nutrition plan. Avoid alcohol,
              caffeine and sugary drinks.
            </Typography>
          )}
          {state.questionnaire.ranking === 2 && (
            <Typography component="p" variant="h5">
              <br />
              <br />• Connect with your doctor and discuss any concerns you
              have. Share your logged symptoms and self-care activities with
              them.
              <br />
              <br />• Ask your doctor when and how to report your symptoms to
              them.
              <br />
              <br />• Report if your mood disturbance gets worse, if your mood
              is severe (&gt;7), or mood does not improve from your self-care
              activities.
              <br />
              <br />• Ask your doctor what you should do in the case of an
              emergency and when your mood disturbance should be reported
              urgently.
            </Typography>
          )}
          {state.questionnaire.ranking === 3 && (
            <Typography component="p" variant="h5">
              <br />
              <br />• If your symptoms of disturbance are causing problems with
              relationshpis, work, or your family -- and there isn&apos;t a
              clear solution -- you should see a professional.
              <br />
              <br />• Talking with a mental health counselor or doctor can help
              prevent things from getting worse, especially if your symptoms
              stay for any length of time.
              <br />
              <br />• During the early stages of any mental illness, people find
              a way to understand their symptoms. Feelings or assumptions like
              shame or fear can also make it hard to agree with a diagnosis.
              <br />
              <br />• With treatment, at least 80% of people recover.
              <br />
              <br />• Everyone&apos;s recovery journey looks different. What
              matters is being kind to yourself, working on your health in a way
              that makes sense to you.
            </Typography>
          )}
          {state.questionnaire.ranking === 4 && (
            <Typography component="p" variant="h5">
              <br />
              <br />• It can be hard to talk to your doctor if you think you
              might be depressed. You may feel embarrassed or isolated. But
              you’re not as alone as you might think. About 1 in 5 people will
              have some sort of disorder in their lifetime. While a physical
              examination will reveal a patient&apos;s overall state of health,
              by talking with a patient, a doctor can learn about other things
              that are relevant to making a disorder diagnosis.
              <br />
              <br />• Before your appointment, write down your concerns about
              depression and specific symptoms of depression you might have.
              This information can help the doctor make an accurate diagnosis
              and ensure effective treatment.
            </Typography>
          )}
          {state.questionnaire.ranking === 5 && (
            <Typography component="p" variant="h5">
              <br />
              <br />• If you feel unwell, talking to your doctor or other health
              professional is an important first step. You might wonder why this
              has happened to you and how a diagnosis will affect your life.
              Receiving a diagnosis can be a difficult experience, but it&apos;s
              important to remember that you are not your diagnosis—you are a
              person that happens to be living with disturbance mood.
            </Typography>
          )}

          {state.questionnaire.ranking === 6 && (
            <Typography component="p" variant="h5">
              <br />
              <br />• You are experiencing a significant level of mood
              disturbance. Hence, we recommend that you prioritize taking care
              of your mental health at this point of your life. Good news is
              that the condition can be fully cured if it is supervised by a
              professional. It may be very hard for you to start now, but after
              the process you will feel much better. There are plenty of
              approaches to handle this problem. You may address your local
              psychiatrist directly to start the process right away. Otherwise,
              you are welcome to use advice from medical workers on our website
              to start your journey. If you feel like you need immediate
              support, don’t lose a moment to go to the emergency room.
            </Typography>
          )}
        </Box>
      )}
      <Dialog
        open={state.questionnaire.openSecondQuestionnaire}
        onClose={handleCloseSecondQuestionnaire}
      >
        <Questionnaire
          title="For users who just joined us, we offer this comprehensive questionnaire to further examine your current mental state."
          subtitle="Please take your time and fill this questionnaire, since this will enable us to generate a ranking of your mental health."
          id={2}
        />
      </Dialog>
      <Dialog
        open={state.questionnaire.openSecondResults}
        onClose={handleCloseSecondQuestionnaire}
      >
        <DialogTitle>The Questionnaire Result</DialogTitle>
        <DialogContent>
          <Box px={4}>
            {state.questionnaire.ranking === 1 && (
              <Typography component="p" variant="h5">
                Don’t worry! The changes in your mood are completely normal.
                Some advice may help:
                <br />
                <br />• It&lsquo;s important to understand that feeling
                depressed doesn&lsquo;t mean you have depression.
                <br />
                <br />• Keep a log of any mood changes and symptoms you are
                experiencing and look for patterns in a journal.
                <br />
                <br />• Consider bringing a supportive family member or friend
                to your health care visits. Talk with your doctor about any
                questions you have, as understanding your disease and treatment
                plan can help reduce uncertainty.
                <br />
                <br />• Create a routine that includes a variety of relaxation
                techniques such as muscle relaxation, massage, prayer,
                mindfulness, meditation, yoga or listening to calming music.
                <br />
                <br />• Check in with yourself often. Concentrate on positive
                thoughts and emotions.
                <br />
                <br />• If your distress, anxiety, or depression is persistent,
                ask your doctor about starting counseling, cognitive behavioral
                therapy, music therapy, or guided imagery.
                <br />
                <br />• Nutritional issues can underlie depression. Work with
                your health care provider to develop a nutrition plan. Avoid
                alcohol, caffeine and sugary drinks.
              </Typography>
            )}
            {state.questionnaire.ranking === 2 && (
              <Typography component="p" variant="h5">
                <br />
                <br />• Connect with your doctor and discuss any concerns you
                have. Share your logged symptoms and self-care activities with
                them.
                <br />
                <br />• Ask your doctor when and how to report your symptoms to
                them.
                <br />
                <br />• Report if your mood disturbance gets worse, if your mood
                is severe (&gt;7), or mood does not improve from your self-care
                activities.
                <br />
                <br />• Ask your doctor what you should do in the case of an
                emergency and when your mood disturbance should be reported
                urgently.
              </Typography>
            )}
            {state.questionnaire.ranking === 3 && (
              <Typography component="p" variant="h5">
                <br />
                <br />• If your symptoms of disturbance are causing problems
                with relationshpis, work, or your family -- and there isn&apos;t
                a clear solution -- you should see a professional.
                <br />
                <br />• Talking with a mental health counselor or doctor can
                help prevent things from getting worse, especially if your
                symptoms stay for any length of time.
                <br />
                <br />• During the early stages of any mental illness, people
                find a way to understand their symptoms. Feelings or assumptions
                like shame or fear can also make it hard to agree with a
                diagnosis.
                <br />
                <br />• With treatment, at least 80% of people recover.
                <br />
                <br />• Everyone&apos;s recovery journey looks different. What
                matters is being kind to yourself, working on your health in a
                way that makes sense to you.
              </Typography>
            )}
            {state.questionnaire.ranking === 4 && (
              <Typography component="p" variant="h5">
                <br />
                <br />• It can be hard to talk to your doctor if you think you
                might be depressed. You may feel embarrassed or isolated. But
                you’re not as alone as you might think. About 1 in 5 people will
                have some sort of disorder in their lifetime. While a physical
                examination will reveal a patient&apos;s overall state of
                health, by talking with a patient, a doctor can learn about
                other things that are relevant to making a disorder diagnosis.
                <br />
                <br />• Before your appointment, write down your concerns about
                depression and specific symptoms of depression you might have.
                This information can help the doctor make an accurate diagnosis
                and ensure effective treatment.
              </Typography>
            )}
            {state.questionnaire.ranking === 5 && (
              <Typography component="p" variant="h5">
                <br />
                <br />• If you feel unwell, talking to your doctor or other
                health professional is an important first step. You might wonder
                why this has happened to you and how a diagnosis will affect
                your life. Receiving a diagnosis can be a difficult experience,
                but it&apos;s important to remember that you are not your
                diagnosis—you are a person that happens to be living with
                disturbance mood.
              </Typography>
            )}

            {state.questionnaire.ranking === 6 && (
              <Typography component="p" variant="h5">
                <br />
                <br />• You are experiencing a significant level of mood
                disturbance. Hence, we recommend that you prioritize taking care
                of your mental health at this point of your life. Good news is
                that the condition can be fully cured if it is supervised by a
                professional. It may be very hard for you to start now, but
                after the process you will feel much better. There are plenty of
                approaches to handle this problem. You may address your local
                psychiatrist directly to start the process right away.
                Otherwise, you are welcome to use advice from medical workers on
                our website to start your journey. If you feel like you need
                immediate support, don’t lose a moment to go to the emergency
                room.
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSecondQuestionnaire}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

const Home = () => <HomeContent />;

export default Home;
