import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TotalWithdrawn = () => {
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
        "http://localhost:3000/api/withdrawals/swp/total_withdrawn/",
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
        <Form.Group className="mb-3 row " controlId={key}>
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
            <strong>Total Amount Withdrawn:</strong>{" "}
            {result.total_amount_withdrawn}
          </p>
          <p>
            <strong>Withdrawal Frequency:</strong> {result.withdrawal_frequency}
          </p>
          <p>
            <strong>Withdrawal Amount:</strong> {result.withdrawal_amount}
          </p>
          <p>
            <strong>Withdrawals Per Year:</strong> {result.withdrawals_per_year}
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="optionform">
        <form
          className="container w-auto mt-2 shadow p-5 "
          style={{ backgroundColor: "rgb(95 230 95)" }}
          onSubmit={handleSubmit}
        >
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

export default TotalWithdrawn;
