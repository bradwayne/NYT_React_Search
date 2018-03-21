import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Button from "./components/Button";
import { ResultsList, ResultsListItem } from "./components/ResultsList";
import { Container, Row, Col } from "./components/Grid";
import API from "./utils/API";



class App extends Component {
  state = {
    results: [],
    resultSearchTopic: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getResultsList(this.state.resultSearchTopic)
      .then(res => 
      {
        this.setState({ results: res.data.response.docs })
        console.log(this.state.results)
      })
      .catch(err => console.log(err));
  };

    render() {
      return (
        <div>
          <Container>
            <Header />
          </Container>
            <Row>
              <Container>
                <Row>
                  <Col size='md-12'>
                    <Search
                      name="resultSearchTopic"
                      value={this.state.resultSearchTopic}
                      onChange={this.handleInputChange}
                      placeholder="topic search"
                    />
                    <Button
                      onClick={this.handleFormSubmit}
                      type="primary"
                      className="input-lg"
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container>
                <Row>
                  <Col size='md-12'>
                    {!this.state.results.length ? (
                      <h1 className="result-display text-center">No Results to Display</h1>
                    ) : (
                        <ResultsList>
                          {this.state.results.map(result => {
                            return (
                              <ResultsListItem
                                key={result._id}
                                title={result.headline.main}
                                body={result.snippet}
                                href={result.web_url}
                              />
                            );
                          })}
                        </ResultsList>
                      )}
                  </Col>
                </Row>
              </Container>
            </Row>
        </div>

    );
  }
}



export default App;
