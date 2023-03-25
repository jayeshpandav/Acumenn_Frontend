import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const NavbarComp = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Acumenn Money
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
