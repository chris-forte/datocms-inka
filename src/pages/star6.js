import React, { useState, useRef, useEffect } from "react";
import MyDropzone from "../components/Dropzone";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";
import { Spring, animated } from "react-spring";
import { interpolate, toCircle } from "flubber";
import { GradientPinkRed as Gradient } from "@vx/gradient";

function CardBuilder() {
  const [numStars, changeNumStars] = useState(10);
  const [offerText, changeOfferText] = useState("YOUR OFFER GOES HERE");
  const [paths] = useState([
    "M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z",
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /* star */,
    "M10,0.562c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.774,15.195,0.562,10,0.562 M10,18.521c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.418,10,1.418s8.552,3.828,8.552,8.551S14.723,18.521,10,18.521",
    "M16.227,16.672c0,0.49-0.396,0.889-0.889,0.889H2.883c-0.491,0-0.889-0.398-0.889-0.889V5.107c0-0.491,0.398-0.89,0.889-0.89h7.562V3.328H2.883c-0.982,0-1.779,0.796-1.779,1.779v11.565c0,0.982,0.796,1.779,1.779,1.779h12.455c0.982,0,1.779-0.797,1.779-1.779V10h-0.891V16.672z M15.338,1.549c-1.965,0-3.559,1.593-3.559,3.558c0,1.966,1.594,3.558,3.559,3.558s3.559-1.592,3.559-3.558C18.896,3.142,17.303,1.549,15.338,1.549z M15.338,7.776c-1.475,0-2.668-1.195-2.668-2.669c0-1.474,1.193-2.669,2.668-2.669s2.668,1.195,2.668,2.669C18.006,6.581,16.812,7.776,15.338,7.776z"
  ]);
  const [index, changeFromIndex] = useState(0);
  //const [toIndex, changeToIndex] = useState(0);
  const [theme, changeTheme] = useState("dark");
  const [logo, changeLogo] = useState("");
  const [shape] = useState("Heart");

  const prevIndexRef = useRef();
  useEffect(() => {
    prevIndexRef.current = index;
  });
  const prevIndex = prevIndexRef.current;
  console.log("a" + prevIndex);
  function handleChangeNumStars(event) {
    changeNumStars(event.target.value);
  }
  function handleChangeOfferText(event) {
    changeOfferText(event.target.value);
  }
  function handleChangeStarShape(event) {
    //changeFromIndex;
    changeFromIndex(event.target.value);
  }

  function handleChangeTheme(event) {
    changeTheme(event.target.value);
  }
  function handleNumStarsUpdate(event) {
    changeNumStars(event.target.value);
  }
  //this.getData = this.getData.bind(this);
  function handleChangeLogo(logoBase64) {
    changeLogo(logoBase64);
  }
  let numStarsArray = [];
  for (var i = 0; i < numStars; i++) {
    numStarsArray.push(i);
  }
  let starWidth = 50;

  const interpolator = interpolate(paths[prevIndex] || paths[0], paths[index], {
    maxSegmentLength: 0.1
  });
  const myThemeValues = {
    dark: {
      backgroundColor: "#000",
      textColor: "#fff"
    },
    light: {
      backgroundColor: "#fff",
      textColor: "#000"
    },
    retro: {
      backgroundColor: "#F4F6EF",
      textColor: "#dd9716"
    }
  };

  return (
    <Layout>
      <div style={{ background: "#fff", minHeight: "300px" }}>
        <Container style={{ padding: "50px 0px" }}>
          <Row style={{ width: "100%" }}>
            <Col className="col-sm-4">
              <label style={{ marginBottom: "30px", width: "100%" }}>
                What is your offer?:
                <br />
                <input
                  type="text"
                  value={offerText}
                  onChange={handleChangeOfferText}
                  style={{ width: "100%" }}
                />
              </label>
              <label style={{ marginBottom: "30px" }}>
                Choose a shape for your stars:
                <br />
                <select value={index} onChange={handleChangeStarShape}>
                  <option value="0">Darth Vader</option>
                  <option value="1">Star</option>
                  <option value="2">Circle</option>
                  <option value="3">Square</option>
                </select>
              </label>
              <label style={{ marginBottom: "30px" }}>
                how many stars do you want on your card?:
                <select value={numStars} onChange={handleChangeNumStars}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </label>
              <label style={{ marginBottom: "30px" }}>
                Choose a theme for your card:
                <br />
                <select value={theme} onChange={handleChangeTheme}>
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="retro">Retro</option>
                </select>
              </label>
              <div>
                <MyDropzone sendData={handleChangeLogo} />
              </div>
            </Col>

            <Col className="col-sm-8">
              <div
                style={{
                  height: "500px",
                  width: "350px",
                  border: "1px solid #fccc",
                  background: myThemeValues[theme]["backgroundColor"]
                }}
              >
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <img src={logo} style={{ maxHeight: "100px" }} />
                  <h1
                    style={{
                      color: myThemeValues[theme]["textColor"],
                      fontSize: "1.1em",
                      padding: "30px 50px 0px 50px",
                      lineHeight: "90%",
                      textAlign: "center"
                    }}
                  >
                    {offerText}
                  </h1>
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "1.5em",
                    padding: "5px 50px",
                    lineHeight: "90%",
                    textAlign: "center"
                  }}
                >
                  <Row style={{ padding: "0px 30px" }}>
                    {" "}
                    {numStarsArray.map(function(star, index) {
                      return (
                        <Col
                          className="col-sm-4"
                          style={{ padding: "10px 0px" }}
                        >
                          {" "}
                          <svg
                            width={starWidth}
                            viewBox="0 0 22 22"
                            key={index}
                          >
                            <Gradient id="gradient" />
                            <g stroke="url(#gradient)" fill="">
                              <Spring
                                reset
                                native
                                from={{ t: 0 }}
                                to={{ t: 1 }}
                              >
                                {({ t }) => (
                                  <animated.path
                                    d={t.interpolate(interpolator)}
                                  />
                                )}
                              </Spring>
                            </g>
                          </svg>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default CardBuilder;
