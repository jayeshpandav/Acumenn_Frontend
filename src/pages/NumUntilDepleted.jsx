import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NumUntilDepleted = () => {
  const [formData, setFormData] = useState({
    initial_investment: "",
    withdrawal_amount: "",
    withdrawal_frequency: "",
    inflation_rate: "",
    roi: "",
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

  //   const frequencyOptions = [
  //     { value: null, label: "Select" },
  //     { value: "monthly", label: "Monthly" },
  //     { value: "quarterly", label: "Quarterly" },
  //     { value: "annually", label: "Annually" },
  //   ];

  const formGroups = Object.keys(formData).map((key) => {
    if (key === "withdrawal_frequency") {
      return (
        <Form.Group className="mb-3 row" controlId={key}>
          <Form.Label className="col">{key}</Form.Label>
          <Form.Select
            className="col"
            name={key}
            value={formData[key]}
            onChange={handleChange}
          >
            <option selected>Select</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </Form.Select>
        </Form.Group>
      );
    } else {
      return (
        <Form.Group className="mb-3 row" controlId={key}>
          <Form.Label className="col">{key}</Form.Label>
          <Form.Control
            type="number"
            className="col"
            placeholder={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        </Form.Group>
      );
    }
  });

  const displayResult = () => {
    if (result) {
      //   console.log(result);
      return (
        <div
          className="container m-auto mt-3 d-flex flex-column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p>
            <strong>Inflation Rate :</strong> {result.inflation_rate}
          </p>
          <p>
            <strong>Initial Investment :</strong> {result.initial_investment}
          </p>
          <p>
            <strong>No. of Withdrawals Until Account is Depleted :</strong>{" "}
          </p>
          <p>{result.num_withdrawals_until_depleted}</p>
          <p>
            <strong>Return on Investment :</strong> {result.roi}
          </p>
          <p>
            <strong>Withdrawal Amount :</strong> {result.withdrawal_amount}
          </p>
          <p>
            <strong>Withdrawal Frequency :</strong>{" "}
          </p>
          <p>{result.withdrawal_frequency}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="optionform">
        <form className="container w-50 mt-2" onSubmit={handleSubmit}>
          {formGroups}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>

        {displayResult()}
      </div>
    </>
  );
};

export default NumUntilDepleted;
