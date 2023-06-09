import React, { useRef } from "react";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";
import "./styles/contact.css";
import { AiFillMail } from "react-icons/ai";
// import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hqa04xd",
      "template_qsjzc6y",
      form.current,
      "9bLaVTpIErf5wReCg"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="leftside">
        <h4>GET IN TOUCH</h4>
        <h1>CONTACT</h1>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <AiFillMail className="contact_option-icon" />
              <h4>Email</h4>
              <h5 className="overflow-hidden">mutualfunds@acumenn.io</h5>
              <Link
                className="send"
                target="_blank"
                rel="noreferrer"
                to="mailto:mutualfunds@acumenn.io
                "
              >
                send a message
              </Link>
            </article>
            <article className="contact_option">
              {/* <RiInstagramFill className="contact_option-icon" /> */}
              <h4>Messenger</h4>
              <h5>Acumenn</h5>
              <Link
                className="send"
                target="_blank"
                rel="noreferrer"
                to="https://www.instagram.com/acumenn.money/"
              >
                send a message
              </Link>
            </article>
            <article className="contact_option">
              <BsLinkedin className="contact_option-icon" />
              <h4>Linkdin</h4>
              <h5>Acumenn Linkedin</h5>
              <Link
                className="send"
                target="_blank"
                rel="noreferrer"
                to="https://www.linkedin.com/company/acumen-money/"
              >
                send a message
              </Link>
            </article>
          </div>
        </div>
      </div>
      <div className="rightside">
        <form className="contact-form " ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="your message here"
          ></textarea>
          <button className="btn btn-info" type="submit">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
