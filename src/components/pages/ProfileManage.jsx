import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// Import Font Awesome icons - You'll need to install these packages
// npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logoImg from "../../assets/icons/shrek-animated-character-smiling-face-png-5cbkwo8lfn628tyi-5cbkwo8lfn628tyi.png"; // Import your logo

const ProfileManage = () => {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}

      {/* Main Content */}
      <div className="main-content">
        <div className="d-flex justify-content-center align-items-center mb-4 px-4">
          <h2 className="fw-bold text-center">Profile</h2>
        </div>

        <div className="content-body p-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              {/* Top Navigation */}

              <Row>
                <Col md={4}>
                  <Card className="border-0 ">
                    <Card.Body className="text-center">
                      <div className="mb-3">
                        <img
                          src={logoImg}
                          alt="Profile"
                          className="rounded-circle img-thumbnail"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <h4>Reem Adel</h4>
                      <div className="d-flex justify-content-center gap-5 my-3">
                        <div>
                          <h2 className="text-warning fw-bold">230</h2>
                          <p className="mb-0">follower</p>
                        </div>
                        <div>
                          <h2 className="text-warning fw-bold">210</h2>
                          <p className="mb-0">following</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={8}>
                  <div className="mb-4">
                    <div className="mb-2">
                      <strong>Name : </strong>Reem Adel Abdel Aziz
                    </div>
                    <div className="mb-2">
                      <strong>Email : </strong>reemadel316@gmail.com
                    </div>
                    <div className="mb-3">
                      <strong>Phone : </strong>+201007296090
                    </div>

                    <h5 className="mt-4 mb-3">linked accounts</h5>
                    <div className="d-flex flex-wrap gap-3 mb-4">
                      <div className="social-icon bg-light rounded-circle p-5">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="3x"
                          style={{ color: "#4267B2" }}
                        />
                      </div>
                      <div className="social-icon bg-light rounded-circle p-5 ">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="3x"
                          style={{ color: "#E1306C" }}
                        />
                      </div>
                      <div className="social-icon bg-light rounded-circle p-5">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          size="3x"
                          style={{ color: "#1DA1F2" }}
                        />
                      </div>
                      <div className="social-icon bg-light rounded-circle p-5">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="3x"
                          style={{ color: "#0077B5" }}
                        />
                      </div>
                      <div className="social-icon bg-light rounded-circle p-5">
                        <FontAwesomeIcon
                          icon={faTiktok}
                          size="3x"
                          style={{ color: "#000000" }}
                        />
                      </div>
                      <div className="social-icon bg-light rounded-circle p-5">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="3x"
                          style={{ color: "#FF0000" }}
                        />
                      </div>
                    </div>

                    <div className="d-flex gap-5 mt-4 mb-3 justify-content-center">
                      <Button variant="dark" className="px-5 rounded-pill ">
                        Add
                      </Button>
                      <Button variant="dark" className="px-5 rounded-pill">
                        Remove
                      </Button>
                      <Button variant="dark" className="px-5 rounded-pill">
                        Delete
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileManage;
