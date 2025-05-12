import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { IconContext } from "react-icons";

import { barOptions } from "@Util/index.js";
import { lineOptions } from "@Util/index.js";
import { platformIcons } from "@Util/index.js";
import myPhoto from "@images/myPhoto.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const platformColors = {
  facebook: "#0068FF",
  instagram: "#FD0B6A",
  twitter: "#1DA1F2",
  linkedin: "#0077B5",
  tiktok: "#000",
};

const platformIconsReact = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  tiktok: <FaTiktok />,
};

const updatedStats = [
  {
    id: "likes",
    label: "Likes",
    icon: <AiOutlineLike />,
    color: "text-primary",
    bgColor: "#F5F5F5",
  },
  {
    id: "comments",
    label: "Comments",
    icon: <AiOutlineComment />,
    color: "text-success",
    bgColor: "#E5E5E5",
  },
  {
    id: "shares",
    label: "Shares",
    icon: <AiOutlineShareAlt />,
    color: "text-danger",
    bgColor: "#D5D5D5",
  },
];

const MainDashboard = () => {
  const [platforms, setPlatforms] = useState([]);
  const [selectedPlatformId, setSelectedPlatformId] = useState("facebook");

  useEffect(() => {
    axios.get("http://localhost:3001/platforms").then((response) => {
      setPlatforms(response.data);
    });
  }, []);

  const selectedPlatform = platforms.find((p) => p.id === selectedPlatformId);

  const createBarData = () => ({
    labels: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"],
    datasets: [
      {
        data: selectedPlatform?.barData || [],
        backgroundColor: platformColors[selectedPlatform.id],
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 20,
      },
    ],
  });

  const createLineData = () => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [30, 60, 40, 70, 50, 65],
        borderColor: "#4ED7F1",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  });

  if (!selectedPlatform) return null;

  return (
    <div className="min-vh-100">
      <Container fluid className="py-5">
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-5 justify-content-center">
              {platforms.map((platform) => (
                <Card
                  key={platform.id}
                  className={`social-card border-0 rounded-4 mb-5 shadow ${
                    selectedPlatformId === platform.id
                      ? "active-card shadow"
                      : "shadow"
                  } text-center`}
                  style={{
                    width: "15%",
                    minWidth: "20rem",
                  }}
                  onClick={() => setSelectedPlatformId(platform.id)}
                >
                  <Card.Body>
                    <div
                      className="mb-4 text-center"
                      style={{
                        fontSize: "3rem",
                        color: platformColors[platform.id],
                      }}
                    >
                      {platformIconsReact[platform.id]}
                    </div>
                    <h2
                      className="fw-medium text-center mb-1"
                      style={{ fontSize: "3rem" }}
                    >
                      {platform.followers}
                    </h2>
                    <p className="fs-4">Followers</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card
              className="border-0 rounded-5 pt-4"
              style={{ backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="py-5 px-lg-4 px-1">
                <Row className="gap-4">
                  <Col
                    md={12}
                    lg={5}
                    className="p-4 rounded-4 order-1 order-lg-0"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    <h5 className="mb-4 fs-2 text-dark">
                      {selectedPlatform.id.charAt(0).toUpperCase() +
                        selectedPlatform.id.slice(1)}{" "}
                      Followers
                    </h5>
                    <div style={{ height: "16rem" }}>
                      <Bar data={createBarData()} options={barOptions} />
                    </div>
                  </Col>

                  <Col md={8} lg={4} className="mx-auto order-1 order-lg-0">
                    <div className="d-flex flex-column h-100 justify-content-between">
                      <IconContext.Provider value={{ size: "24px" }}>
                        {updatedStats.map((item) => (
                          <Card
                            key={item.id}
                            className="rounded-4 py-2 mb-3"
                            style={{ backgroundColor: item.bgColor }}
                          >
                            <Card.Body className="p-3 d-flex align-items-center">
                              <div className={`me-3 ${item.color}`}>
                                {item.icon}
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-0 fs-5">{item.label}</h6>
                                <h5 className="mb-0 fs-6 fw-medium text-muted">
                                  {selectedPlatform[item.id]}
                                </h5>
                              </div>
                              <div style={{ width: "4rem", height: "2.5rem" }}>
                                <Line
                                  data={createLineData()}
                                  options={lineOptions}
                                />
                              </div>
                            </Card.Body>
                          </Card>
                        ))}
                      </IconContext.Provider>
                    </div>
                  </Col>

                  <Col md={3} lg={2} className="mx-auto">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                      <div className="position-relative">
                        <div
                          style={{
                            width: "12rem",
                            height: "12rem",
                            border: "0.4rem solid #A8F1FF",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={myPhoto}
                            alt="Profile"
                            className="img-fluid"
                            style={{
                              width: "12rem",
                              height: "12rem",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div>
                          {platformIcons.map((platform) =>
                            selectedPlatformId === platform.name ? (
                              <img
                                key={platform.name}
                                style={{
                                  position: "absolute",
                                  bottom: "0",
                                  left: "0",
                                  width: "63px",
                                  height: "83px",
                                }}
                                src={platform.icon}
                                alt={platform.name}
                              />
                            ) : null
                          )}
                        </div>
                      </div>
                      <h4 className="pt-3 text-success fw-bold">
                        {selectedPlatform.growth}
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainDashboard;
