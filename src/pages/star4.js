import React, { useCallback } from "react";
import MyDropzone from "../components/Dropzone";
import AnimatedStar from "../components/AnimatedStar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";
import smartphone from "../assets/images/smartphone.png";

import { Spring, animated } from "react-spring";
import { interpolate } from "flubber";
import { GradientPinkRed as Gradient } from "@vx/gradient";

class Star4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 10,
      starWidth: 60,
      offerText: "YOUR OFFER GOES HERE",
      bgColor: "#000",
      paths: [
        "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      ],
      index: 0,
      theme: "dark",
      logo: ""
    };

    this.handleChangeStars = this.handleChangeStars.bind(this);
    this.handleChangeOfferText = this.handleChangeOfferText.bind(this);
    this.handleStarShapeChange = this.handleStarShapeChange.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.getData = this.getData.bind(this);
  }
  /*
  goNext = () =>
    
    this.setState(state => ({
      index: state.index + 1 >= state.paths.length ? 0 : state.index + 1
    }));
    */
  handleChangeStars(event) {
    this.setState({ stars: event.target.value });
  }
  handleChangeOfferText(event) {
    this.setState({ offerText: event.target.value });
  }

  handleChangeTheme(event) {
    this.setState({ theme: event.target.value });
  }

  handleStarShapeChange(event) {
    this.setState(state => ({
      index: state.index + 1 >= state.paths.length ? 0 : state.index + 1
    }));
  }

  getData(logoBase64) {
    console.log("star4: " + logoBase64);
    this.setState({
      logo: logoBase64
    });
  }

  render() {
    /*var stars = [1, 2, 3, 4, 5, 6];

    var starsList = this.state.stars.map(function(star) {
      return <AnimatedStar />;
    });
    */
    let numStars = [];
    for (var i = 0; i < this.state.stars; i++) {
      numStars.push(i);
    }
    console.log(Array.from(this.state.stars.toString()).map(Number));
    let starWidth = this.state.starWidth;
    console.log(starWidth);
    const { paths, index } = this.state;
    const interpolator = interpolate(
      paths[index],
      paths[index + 1] || paths[0],
      { maxSegmentLength: 0.1 }
    );
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
                <label>
                  Your Offer:
                  <input
                    type="text"
                    value={this.state.offerText}
                    onChange={this.handleChangeOfferText}
                  />
                </label>
                <label>
                  Shape:
                  <select
                    value="this.state.index"
                    onChange={this.handleStarShapeChange}
                  >
                    <option value="0">Heart</option>
                    <option value="1">Star</option>
                  </select>
                </label>
                <label>
                  Number of stars:
                  <select
                    value={this.state.shape}
                    onChange={this.handleChangeStars}
                  >
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
                <label>
                  Theme:
                  <select
                    value={this.state.theme}
                    onChange={this.handleChangeTheme}
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="retro">Retro</option>
                  </select>
                </label>
                <div>
                  <MyDropzone sendData={this.getData} />
                </div>
              </Col>

              <Col className="col-sm-8">
                <div
                  style={{
                    backgroundImage: `url(${smartphone})`,
                    backgroundPosition: "",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "1350px",

                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "45px",
                      top: "120px",
                      height: "1035px",
                      width: "650px",
                      background:
                        myThemeValues[this.state.theme]["backgroundColor"]
                    }}
                  >
                    <div style={{ padding: "50px", textAlign: "center" }}>
                      <img
                        src={this.state.logo}
                        style={{ maxHeight: "200px" }}
                      />
                      <h1
                        style={{
                          color: myThemeValues[this.state.theme]["textColor"],
                          fontSize: "1.5em",
                          padding: "50px 50px 10px 50px",
                          lineHeight: "90%",
                          textAlign: "center"
                        }}
                      >
                        {this.state.offerText}
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
                      {numStars.map(function(star, index) {
                        return (
                          <svg
                            width={starWidth}
                            viewBox="0 0 22 22"
                            key={index}
                          >
                            <Gradient id="gradient" />
                            <g fill="url(#gradient)">
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}
export default Star4;
