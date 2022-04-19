import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  showCaseSection: {
    height: "87%",
    display: "flex",
    maxWidth: 1600,
    margin: "0 auto",
  },

  showCaseBackground: {
    marginRight: 0,
    width: " 100%",
    boxShadow: "0px 0px 47px rgba (0,0,0,0.28)",
  },

  showCaseImage: {
    position: "absolute",
    opacity: 0,
  },
  showCaseSectionTitle: {
    color: "#000",
    fontFamily: "Futura PT",
    fontWeight: 600,
    overflow: "hidden",
    marginBottom: 45,
  },
  showCaseSectionContainer: {
    padding: "50 , 0",
  },
  scene: {
    background: "red",
  },
  showCaseTimeline: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  showCaseForm: {
    position: "absolute",
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    lineHeight: "150px",
    fontFamily: " 'Montserrat', sans-serif",
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  showCasetextTimeline: {
    paddingLeft: 90,
  },
});

const Showcase = props => {
  const classes = useStyles();
  const [form, setForm] = useState({});

  useEffect(() => {
    switch (props.formType) {
      case "square":
        setForm(cornerSquare);
        break;
      case "triangle":
        setForm(cornerTriangle);
        break;
      case "frame":
        setForm(cornerFrame);
        break;
      default:
        setForm(cornerCircle);
    }
  }, []);
console.log (useEffect  ,"hello");

  let cornerCircle = {
    position: "absolute",
    width: 150,
    height: 150,
    background: `linear-gradient(45deg, ${props.backgroundColor} 20%, ${props.formColor} 100%)`,
    boxShadow: "0px 0px 47px rgba(0, 0, 0, 0.28)",
    borderRadius: 150,
    top: 0,
    right: 0,
  };

  let cornerSquare = {
    position: "absolute",
    width: 150,
    height: 150,
    background: `linear-gradient(45deg, ${props.backgroundColor} 20%, ${props.formColor} 100%)`,
    boxShadow: "0px 0px 47px rgba(0, 0, 0, 0.28)",
    top: 0,
    right: 0,
  };

  let cornerTriangle = {
    position: "absolute",
    width: 150,
    height: 150,
    background: `linear-gradient(45deg, ${props.backgroundColor} -6%, ${props.formColor} 100%)`,
    boxShadow: "0px 0px 47px rgba(0, 0, 0, 0.28)",
    top: 0,
    right: 0,
    clipPath: "polygon(50% 0, 0% 100%, 100% 100%)",
  };

  let cornerFrame = {
    position: "absolute",
    width: 150,
    height: 150,
    background: `linear-gradient(45deg, ${props.backgroundColor} -6%, ${props.formColor} 100%)`,
    boxShadow: "0px 0px 47px rgba(0, 0, 0, 0.28)",
    top: 0,
    right: 0,
    clipPath:
      "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
  };
  const forms = [];

  return (
    <>
      <section
        className={classes.showCaseSection}
        style={{ backgroundColor: "white" }}
      >
        <Grid
          container
          spacing={3}
          className={classes.showCaseSectionContainer}
        >
          <Grid item xs={6} style={{ position: "relative" }}>
            <Controller>
              <Scene
                indicators={false}
                triggerHook={"onEnter"}
                offset={350}
                reverse={true}
                duration={"75%"}
              >
                {(progress, event) => {
                  return (
                    <div>
                      <Timeline
                        paused
                        wrapper={<div className={classes.showCaseTimeline} />}
                        target={
                          <div
                            className={classes.showCaseBackground}
                            style={{
                              background: props.gradient
                                ? `linear-gradient(45deg, ${
                                    props.backgroundColor
                                  } 20%, ${props.formColor} 100%)`
                                : props.backgroundColor
                            }}
                          />
                        }
                        playState={
                          event.type === "start" &&
                          event.scrollDirection === "FORWARD"
                            ? "play"
                            : event.type === "end" &&
                              event.scrollDirection === "REVERSE"
                            ? "play"
                            : "reverse"
                        }
                      >
                        <Tween
                          from={{
                            scale: props.first !== undefined ? 0.5 : 0.2,
                            y: props.first !== undefined ? -125 : -75,
                            x: 75
                          }}
                          to={{
                            scale: 1,
                            y: -75,
                            color: "transparent"
                          }}
                          ease={"Power2.easeOut"}
                          duration={0.3}
                        >
                          <div className={classes.showCaseForm} style={form}>
                            {props.first !== undefined && "scroll"}
                          </div>
                        </Tween>
                        <Tween
                          delay={0.2}
                          to={{
                            height: 700
                          }}
                          ease={"Power1.easeIn"}
                          duration={0.3}
                        />
                      
                        <Tween
                          to={{
                            opacity: 1
                          }}
                          ease={"Power3.easeOut"}
                          duration={0.5}
                        >
                          <img
                            className={classes.showCaseImage}
                            style={props.imageStyle}
                            src={props.image}
                            alt={""}
                          />
                        </Tween>
                      </Timeline>
                    </div>
                  );
                }}
              </Scene>
            </Controller>
          </Grid>
          <Grid item xs={6}>
            <Controller>
              <Scene
                indicators={false}
                triggerHook={"onEnter"}
                offset={350}
                reverse={true}
                duration={"75%"}
              >
                {(progress, event) => {
                  return (
                    <div className={classes.showCasetextTimeline}>
                      <Timeline
                        paused
                        wrapper={<div />}
                        target={
                          <Typography
                            variant="h2"
                            gutterBottom
                            className={classes.showCaseSectionTitle}
                          >
                            {props.title}
                          </Typography>
                        }
                        playState={
                          event.type === "start" &&
                          event.scrollDirection === "FORWARD"
                            ? "play"
                            : event.type === "end" &&
                              event.scrollDirection === "REVERSE"
                            ? "play"
                            : "reverse"
                        }
                      >
                        <Tween
                          from={{ height: 0 }}
                          to={{ height: 70 }}
                          delay={0.3}
                          duration={0.5}
                          ease={"Power3.easeIn"}
                        />
                        <Tween
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                          duration={0.3}
                          ease={"Power3.easeIn"}
                        >
                          <Typography
                            variant="body1"
                            gutterBottom
                            className={classes.showCaseSectionText}
                          >
                            {props.text}
                          </Typography>
                         
                        </Tween>
                      </Timeline>
                    </div>
                  );
                }}
              </Scene>
            </Controller>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Showcase;
