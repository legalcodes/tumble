import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={6} >
          Blog name:
        </Col>
        <Col sm={6} md={6} >
          Tag:
        </Col>
      </Row>
      <Row className="show-grid">
        <Col sm={6} md={6} >
          <input/>
        </Col>
        <Col sm={6} md={6} >
          <input/>
        </Col>
      </Row>
    </Grid>
  );
};

export default SearchBar;
