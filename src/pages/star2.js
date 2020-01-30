import React from "react";
import AnimatedStar from "../components/AnimatedStar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";
import smartphone from "../assets/images/smartphone.png";
class Star2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      starWidth: 120,
      offerText: "",
      bgColor: "#000",
      paths: [
        "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      ],
      index: 0
    };

    this.handleChangeStars = this.handleChangeStars.bind(this);
    this.handleChangeOfferText = this.handleChangeOfferText.bind(this);
  }

  handleChangeStars(event) {
    this.setState({ stars: event.target.value });
  }
  handleChangeOfferText(event) {
    this.setState({ offerText: event.target.value });
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
                  Number of stars:
                  <select
                    value={this.state.stars}
                    onChange={this.handleChangeStars}
                  >
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
                      background: "#000"
                    }}
                  >
                    <div>
                      <h1
                        style={{
                          color: "#fff",
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
                      {numStars.map(function(star) {
                        return <AnimatedStar width={starWidth} />;
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
export default Star2;
