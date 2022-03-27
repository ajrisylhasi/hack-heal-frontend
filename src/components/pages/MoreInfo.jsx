import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Chip } from "@mui/material";
import logo from "images/logo.svg";
import home from "images/main page icon.svg";
import signin from "images/sign in.svg";
import banner from "images/more-info-banner.svg";
import getBetter from "images/Sweet-day.jpg";
import selfHelp from "images/Rectangle 19.jpg";
import supporting from "images/Rectangle 21.jpg";
import professional from "images/Rectangle 20.jpg";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "theme";

const MoreInfo = () => {
  const history = useHistory();
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    if (cookies.id) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.primary.light,
          backgroundImage: `url(${banner})`,
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
            <Link href="/home" sx={{ margin: 3 }}>
              <img src={home} alt="More info" width="50" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            component="h2"
            variant="h2"
            maxWidth="40%"
            fontWeight={700}
            color={theme.palette.primary.main}
            margin="20px 25px"
            marginBottom={10}
            textAlign="left"
          >
            IS DEPRESSION SADNESS?
          </Typography>
        </Grid>
      </Grid>
      <Grid container p={3} sx={{ width: "100%", backgroundColor: "#F0FDFD" }}>
        <Typography component="p" variant="h5">
          To simple asnwer the question, NO. To understand the difference and
          learn more about depression and the risks it poses to wellbeing and
          life of the affected person continue reading.
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          mt={3}
          sx={{ fontWeight: 600 }}
          color={theme.palette.primary.heading}
        >
          What is Depression?
        </Typography>
        <Typography component="p" variant="h5" mt={2}>
          Everyone gets sad from time to time. Sadness is a normal human
          emotion, and we all have to deal with its reality at some point.
          <br />
          However, depressive disorders like major depression are a bit
          different. These are diagnosable conditions classified as mood
          disorders. When left untreated, symptoms of depression can cause
          serious health complications and alter pathways in the brain over
          time.
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          mt={3}
          sx={{ fontWeight: 600 }}
          color={theme.palette.primary.heading}
        >
          Types of Depression
        </Typography>
        <Grid container spacing={5} width="100%" px={5}>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "#9FA8EB",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Seasonal Depression
                  </Typography>
                  <Box mt={2}>
                    This type of depression is typically triggered by the start
                    of autumn and lasts until winter. Spring and summer seasonal
                    depression is much rarer.
                  </Box>
                </section>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "rgba(150, 51, 250, 0.31)",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Persistent Depressive Disorder / Dysthymia
                  </Typography>
                  <Box mt={2} lineHeight="30px">
                    Persistent Depressive Disorder (PDD), also known as
                    dysthymia, is a chronic depression with a lesser severity
                    than a major depressive disorder. Though the symptoms may be
                    less severe, PDD can last years and interfere with personal
                    life as well as professional life.
                  </Box>
                </section>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "rgba(150, 51, 250, 0.31)",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Postpartum Depression
                  </Typography>
                  <Box mt={2}>
                    Postpartum depression is unique to women as it is caused by
                    hormonal changes following childbirth. Nearly every 4 out of
                    5 women experience mood swings, sadness, and fatigue after
                    childbirth. When these symptoms persist past a couple of
                    weeks, it becomes a sign of postpartum depression.
                  </Box>
                </section>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "#EDD1FA",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Major Depressive Disorder
                  </Typography>
                  <Box mt={2} lineHeight="30px">
                    Major Depressive Disorder is the most common type of
                    depression seen in America and one of the most common mental
                    disorders seen across the country.
                  </Box>
                </section>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "#EDD1FA",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Bipolar Disorder
                  </Typography>
                  <Box mt={2}>
                    Bipolar disorder is a disorder of its own, but it is also
                    classified as a mood disorder and is marked by major
                    depressive episodes. These depressive episodes are typically
                    preceded by manic episodes and periods of heightened mood.
                  </Box>
                </section>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip
              sx={{
                backgroundColor: "#9FA8EB",
                color: "black",
                fontSize: 25,
                padding: "50px",
                borderRadius: "100px",
                boxShadow:
                  "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
                marginTop: 10,
                width: "100%",
                textAlign: "center",
                whiteSpace: "normal",
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
                height: "100%",
              }}
              component="div"
              label={
                <section>
                  <Typography component="h3" variant="h5" fontWeight={600}>
                    Psychotic Depression
                  </Typography>
                  <Box mt={2} lineHeight="30px">
                    Psychotic Depression is depression accompanied by paranoia,
                    hallucination, and delusions. This type of depression can be
                    seen more often in those with bipolar disorder, but it is
                    not exclusive to bipolar disorder
                  </Box>
                </section>
              }
            />
          </Grid>
        </Grid>
        <Typography
          component="h2"
          variant="h2"
          fontWeight={600}
          mt={15}
          color={theme.palette.primary.heading}
        >
          Symptoms
        </Typography>
        <Typography component="p" variant="h5" mt={2}>
          Although depression may occur only once during your life, people
          typically have multiple episodes. During these episodes, symptoms
          occur most of the day, nearly every day and may include:
          <br />
          <br />
          • Feelings of sadness, tearfulness, emptiness or hopelessness
          <br />
          • Angry outbursts, irritability or frustration, even over small
          matters
          <br />
          • Loss of interest or pleasure in most or all normal activities, such
          as sex, hobbies or sports
          <br />
          • Sleep disturbances, including insomnia or sleeping too much
          <br />
          • Tiredness and lack of energy, so even small tasks take extra effort
          <br />
          • Reduced appetite and weight loss or increased cravings for food and
          weight gain
          <br />
          • Anxiety, agitation or restlessness
          <br />
          • Slowed thinking, speaking or body movements
          <br />
          • Feelings of worthlessness or guilt, fixating on past failures or
          self-blame
          <br />
          • Trouble thinking, concentrating, making decisions and remembering
          things
          <br />
          • Frequent or recurrent thoughts of death, suicidal thoughts, suicide
          attempts or suicide
          <br />• Unexplained physical problems, such as back pain or headaches
          <br />
          <br />
          For many people with depression, symptoms usually are severe enough to
          cause noticeable problems in day-to-day activities, such as work,
          school, social activities or relationships with others. Some people
          may feel generally miserable or unhappy without really knowing why.
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          mt={5}
          fontWeight={600}
          color={theme.palette.primary.heading}
        >
          There are many pathways to getting support
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6} lg={3}>
            <img src={getBetter} alt="Get Better" />
            <Typography component="h5" variant="h5" fontWeight={600} mt={4}>
              Get Better
            </Typography>
            <Typography component="h5" variant="h5">
              Overcoming depression and anxiety can be challenging, but there
              are many ways to start helping yourself and others.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img src={selfHelp} alt="Get Better" />
            <Typography component="h5" variant="h5" fontWeight={600} mt={4}>
              Self-help
            </Typography>
            <Typography component="h5" variant="h5">
              There are ways can address aspects of your life that you have
              control over, physically and mentally.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img src={supporting} alt="Get Better" />
            <Typography component="h5" variant="h5" fontWeight={600} mt={4}>
              Supporting others
            </Typography>
            <Typography component="h5" variant="h5">
              You can be there for someone close to you who isn’t being their
              usual self.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img src={professional} alt="Get Better" />
            <Typography component="h5" variant="h5" fontWeight={600} mt={4}>
              Professional Help
            </Typography>
            <Typography component="h5" variant="h5">
              Find professional help Mental health professionals work in
              different ways so it’s important to find someone you’re
              comfortable with.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MoreInfo;
