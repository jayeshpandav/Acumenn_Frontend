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
      .post("http://localhost:3000/api/investment/sip/required", formData)
      .then((response) => {
        setResult(response.data);
        console.log(response.data);
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
      <div className="optionform">
        <form
          className="container  mt-2 shadow p-5 "
          style={{ backgroundColor: "rgb(95 230 95)" }}
          onSubmit={handleSubmit}
        >
          {formGroups}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>

        {result && (
          <div
            className="container w-auto m-auto mt-3 d-flex flex-column"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p>
              <strong>Annual Rate of Return:</strong>{" "}
              {result.annual_rate_of_return}
            </p>
            <p>
              <strong>Required SIP:</strong> {result.required_sip}
            </p>
            <p>
              <strong>Target Value:</strong> {result.target_value}
            </p>
            <p>
              <strong>Duration of Investment:</strong> {result.years}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ReqSip;
