import React from "react";
import { Form } from "react-bootstrap";

const Searchbar = () => {
  return (
    <Form.Group className="mb-3 searchbar" controlId="formBasicEmail">
      <Form.Control
        className="form_radius"
        type="text"
        placeholder="Search headphone"
      />
    </Form.Group>
  );
};

export default Searchbar;
