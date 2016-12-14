import React from 'react';
import { Grid, Row, Col, ControlLabel, FormControl, FormGroup, Button } from "react-bootstrap";

const SearchBar = () => {
  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
          <FormControl {...props} />
      </FormGroup>
    );
  }

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
                        id="formControlsName"
                        type="name"
                        label="blog name"
                        placeholder="Enter email"
                    />
                </Col>
                <Col sm={6} md={3}>
                    <FieldGroup
                        id="formControlsName"
                        type="name"
                        label="blog name"
                        placeholder="Enter email"
                    />
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                </Col>
                <Col sm={6} md={3}>
                    <Button type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
          </form>
      </Grid>
  );
};

export default SearchBar;
