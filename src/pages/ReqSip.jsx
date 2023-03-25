import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ReqSip = () => {
  const [formData, setFormData] = useState({
    target_value: "",
    annual_rate_of_return: "",
    years: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    await axios
      .post(
        "http://localhost:3000/api/withdrawals/swp/num_until_depleted",
        formData
      )
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formGroups = Object.keys(formData).map((key) => (
    <Form.Group className="mb-3 row" controlId={key}>
      <Form.Label className="col">{key}</Form.Label>
      <Form.Control
        // type="number"
        className="col"
        placeholder={key}
        name={key}
        value={formData[key]}
        onChange={handleChange}
      />
    </Form.Group>
  ));

  return (
    <>
      <form className="container w-50 mt-2" onSubmit={handleSubmit}>
        {formGroups}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

      {result && (
        <div>
          <p>Required SIP: {result.required_sip}</p>
        </div>
      )}
    </>
  );
};

export default ReqSip;
