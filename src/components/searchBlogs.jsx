import React, { Component } from 'react';
import { Grid, Row, Col, ControlLabel, Button } from "react-bootstrap";
import FieldGroup from "./base/fieldGroup";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: ""
    }
  }

  render() {
    return (
      <Grid>
          <form>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                    <ControlLabel>Blog name:</ControlLabel>
                </Col>
                <Col sm={6} md={3}>
                    <ControlLabel>Tag:</ControlLabel>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                    <FieldGroup
                        id="formControlName"
                        placeholder="Enter blog name"
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                </Col>
                <Col sm={6} md={3}>
                    <FieldGroup
                        id="formControlTag"
                        placeholder="Enter a tag"
                        onChange={event => this.setState({ tag: event.target.value })}
                    />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                </Col>
                <Col sm={6} md={3}>
                    <Button type="submit" onClick={ ()=>console.log(this.state)}>
                        Submit
                    </Button>
                </Col>
            </Row>
          </form>
      </Grid>
  )
};
}

export default SearchBar;
