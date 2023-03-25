import React from "react";
import "./styles/services.css";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./images/money_grow.jpg";
import img2 from "./images/money_plant.jpg";
import sip from "./images/sip.jpg";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="Our-Services shadow">
        <div class="Heading-services">
          <h3>What We Do</h3>
          <h1>SERVICES WE OFFER</h1>
        </div>
        <div className="Service-block">
          <div className="card  shadow-lg">
            <img className="card-img-top" src={sip} alt="Card image cap" />
            <div className="card-body">
              <h5>Suggest Sip</h5>
              <p class="card-text">
                "We Suggest you the best sip requiredd for your needs."
              </p>
              <button
                type="submit"
                htmlFor="submit"
                class="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/reqsip"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          <div className="card  shadow-lg">
            <img className="card-img-top " src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5>Systematic Withdrawal Plan</h5>
              <p className="card-text">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              </p>
              <button
                type="submit"
                htmlFor="submit"
                class="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/swpwithdrawal"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          {/* <Link to="/CropPred"> */}
          <div className="card shadow-lg ">
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5>No. of Withdrawals untill depleted</h5>
              <p className="card-text">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi."
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/numuntildepleted"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
          <div className="card shadow-lg">
            <img className="card-img-top" src={sip} alt="Card image cap" />
            <div className="card-body">
              <h5>Total amount withdrawn</h5>
              <p class="card-text">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                porro non magni?"
              </p>
              <button
                type="submit"
                htmlFor="submit"
                className="btn btn-dark btn-block Show"
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  // target="_blank"
                  to="/totalwithdrawn"
                >
                  Show More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
