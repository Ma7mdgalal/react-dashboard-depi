import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "@images/Logo.png";
import main from "@images/main.png";
import supp from "@images/supp.png";
import DB from "@images/DB.png";
import AI from "@images/AI.png";
import users from "@images/users.webp";
import icons from "@images/humanicons.png";
import "./Landing.css";
import bgImage from "../../assets/images/background.png";
function Landing() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white py-5">
        <img src={Logo} alt="Logo" className="logo animated-logo"/>
        <Container className="py-5">
          <Row className="align-items-center justify-content-between">
            <Col
              lg={6}
              md={12}
              className="mb-5 mb-lg-0 text-center text-lg-start "
            >
              <h2 className="display-3 fw-bold mb-4 text-yellow ">
                Take control of your social media success
              </h2>
              <p className="lead mb-4 fs-5">
                Track your social media performance, access detailed analytics,
                monitor competitors, and generate AI-powered content
                effortlessly!
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-center">
                <Button
                  variant="custom-primary"
                  className="rounded-pill px-4 py-2 btn-lg"
                  onClick={handleLogin}
                >
                  Log in
                </Button>
                <Button
                  variant="outline-custom"
                  className="rounded-pill px-4 py-2 btn-lg"
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </div>
            </Col>
            <Col lg={6} md={10} className="mx-auto">
              <img
                src={main}
                alt="Dashboard preview"
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Dashboard Preview Section */}
      <section className="dashboard-section py-5">
        <Container className="py-4">
          <Card className="bg-black text-white rounded-5 border-0 shadow overflow-hidden">
            <Card.Body className="p-4 p-md-5">
              <Row className="justify-content-center">
                <Col lg={10} md={12}>
                  <div className="dashboard-preview position-relative mb-5">
                    <img
                      src={DB}
                      alt="dashboard"
                      className="img-fluid rounded-4 shadow-lg mx-auto d-block"
                      style={{ maxWidth: "90%" }}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="fw-light">Supported networks</h3>
                    <img
                      src={supp}
                      alt="dashboard icons"
                      className="network-icons mt-3"
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* AI Section */}
      <section className="ai-section py-5">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center mb-5">
              <img
                src={AI}
                alt="AI capabilities"
                className="img-fluid mb-2 ai-preview"
                style={{ maxWidth: "100%" }}
              />
            </Col>
            <Col md={4} lg={8} className="text-center">
              <h2 className="display-4 fw-bold mb-4">
                Generate content with AI
              </h2>
              <p className="lead">
                Create social posts using over 1000+ social media prompts,
                summarize blogs, and craft high-converting content in your
                preferred tone of voice
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Help Section */}
      <section className="who-we-help-section py-5 bg-white">
        <Container className="py-4">
          <h2 className="text-center text-uppercase fw-bold mb-5">
            Who we help
          </h2>
          <Row className="justify-content-between">
            <Col
              lg={6}
              md={12}
              className="mb-4 mb-lg-0 d-flex align-items-center"
            >
              <img
                src={users}
                alt="Users illustration"
                className="img-fluid rounded-4 shadow "
              />
            </Col>
            <Col lg={6} md={12}>
              <div className="categories-wrapper">
                <Row>
                  {[
                    "Freelancers, small businesses, agencies",
                    "Coaches, therapists, fitness trainers",
                    "Doctors, hospitals, wellness centers",
                    "Accountants, bookkeepers, lawyers",
                    "Churches, nonprofits, foundations",
                    "Governmental institutions, politicians",
                    "Authors, bloggers, podcasters",
                    "Social media managers, marketing specialists",
                    "Schools, universities, research centers",
                    "Hotels, restaurants, wellness resorts",
                    "Artists, graphic designers, photographers",
                    "Event planners, travel agents, car rentals",
                  ].map((item, index) => (
                    <Col md={12} key={index} className="mb-3 fs-6">
                      <div className="category-item p-3 rounded">{item}</div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Closing CTA Section */}
      <section className="cta-section text-center py-5 closing-page">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <h2 className="display-1 fw-bold mb-3">
                Visible every day, even when you're away
              </h2>
              <p className="lead mb-5 fs-3">
                No more long hours spent posting content manually. Use one
                social media management software to centralize all your work.
              </p>

              <div className="text-center mb-4">
                <img
                  src={icons}
                  alt="User icons"
                  className="human-icons img-fluid mb-4"
                  style={{ maxWidth: "100%" }}
                />
                <h3 className="display-7 fw-bold mb-4">
                  Join thousands of people that love Insightly
                </h3>
              </div>

              <div className="d-flex justify-content-center gap-3 ">
                <Button
                  variant=""
                  className="btn-light rounded-pill px-4 py-2 btn-lg"
                  onClick={handleLogin}
                >
                  Log in
                </Button>
                <Button
                  variant=""
                  className="btn-dark rounded-pill px-4 py-2 btn-lg"
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4 mt-auto">
        <Container className="text-center">
          <img
            src={Logo}
            alt="Insightly Logo"
            className="footer-logo mb-2"
            style={{ height: "30px" }}
          />
          <p className="text-muted small mb-0">
            © 2025 Insightly. All rights reserved
          </p>
        </Container>
      </footer>
    </>
  );
}

export default Landing;
