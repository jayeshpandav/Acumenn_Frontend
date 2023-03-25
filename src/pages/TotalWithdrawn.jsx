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
        <div>
          <p>Total Amount Withdrawn: {result.total_amount_withdrawn}</p>
          <p>Withdrawal Frequency: {result.withdrawal_frequency}</p>
          <p>Withdrawal Amount: {result.withdrawal_amount}</p>
          <p>Withdrawals Per Year: {result.withdrawals_per_year}</p>
        </div>
      );
    }
  };

  return (
    <>
      <form className="container w-50 mt-2" onSubmit={handleSubmit}>
        {formGroups}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

      {displayResult()}
    </>
  );
};

export default TotalWithdrawn;
