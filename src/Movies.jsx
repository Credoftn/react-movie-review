import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Movies.css";
import { Container, Row, Col } from "react-bootstrap";
import movieImg from "./movieImg.png";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=uFVTsydzz6y2HXYW6A6qfqSbR7tr00Gm"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ movies: data.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <button className="btn btn-danger my-1">MOVIE REVIEW</button>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row md="3" ClassName="align-items-center justify-content-center">
            {this.state.movies.map((movie) => {
              return (
                <div>
                  {/* <h2>{movie.byline}</h2>
                <p>{movie.critics_pick}</p>
                <h4>{movie.display_title}</h4>
                <h4>{movie.headline}</h4>
                <hr /> */}

                  <Card className="mt-4">
                    <Card.Img
                      variant="top"
                      src={movieImg}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title className=" fw-bold ">
                        {movie.display_title}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Headline
                        <span className="fw-bold">: {movie.headline}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Byline
                        <span className="fw-bold">: {movie.byline}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Critics
                        <span className="fw-bold">: {movie.critics_pick}</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>

                  {/* <hr /> */}
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Movies;
