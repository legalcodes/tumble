import React from 'react';
import { FormGroup, FormControl } from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
        <FormControl {...props} />
    </FormGroup>
  );
}

export default FieldGroup;
