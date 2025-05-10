import React, { useState } from "react";
// import { stats } from "@Util/index.js"; // Import stats from util
// import { platformData } from "@Util/index.js"; // Import platformData from util
import { barOptions } from "@Util/index.js"; // Import barOptions from util
import { lineOptions } from "@Util/index.js"; // Import lineOptions from util
import { platformIcons } from "@Util/index.js"; // Import lineOptions from util
import myPhoto from "@images/myPhoto.png";

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
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons";

// Register ChartJS components
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

const MainDashboard = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("facebook");

  // Updated stats with consistent icons from react-icons/ai and gradient background colors
  const updatedStats = [
    {
      id: "likes",
      label: "Likes",
      icon: <AiOutlineLike />,
      color: "text-primary",
      bgColor: "#F5F5F5", // Lightest gray
    },
    {
      id: "comments",
      label: "Comments",
      icon: <AiOutlineComment />,
      color: "text-success",
      bgColor: "#E5E5E5", // Medium gray
    },
    {
      id: "shares",
      label: "Shares",
      icon: <AiOutlineShareAlt />,
      color: "text-danger",
      bgColor: "#D5D5D5", // Darkest gray
    },
  ];

  const platformData = {
    facebook: {
      icon: <FaFacebookF />,
      color: "#0068FF",
      barData: {
        labels: [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
        ],
        datasets: [
          {
            data: [40, 70, 90, 70, 30, 60, 40],
            backgroundColor: "#4ED7F1",
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      },
      followers: "280K",
      likes: "124k",
      comments: "231k",
      shares: "124k",
      growth: "+19.9%",
    },
    instagram: {
      icon: <FaInstagram />,
      color: "#FD0B6A",
      barData: {
        labels: [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
        ],
        datasets: [
          {
            data: [60, 80, 100, 80, 50, 70, 60],
            backgroundColor: "#6FE6FC",
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      },
      followers: "680K",
      likes: "234k",
      comments: "345k",
      shares: "234k",
      growth: "+25.5%",
    },
    twitter: {
      icon: <FaTwitter />,
      color: "#1DA1F2",
      barData: {
        labels: [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
        ],
        datasets: [
          {
            data: [20, 40, 60, 40, 20, 50, 30],
            backgroundColor: "#A8F1FF",
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      },
      followers: "50K",
      likes: "345k",
      comments: "456k",
      shares: "345k",
      growth: "+10.2%",
    },
    linkedin: {
      icon: <FaLinkedin />,
      color: "#0077B5",
      barData: {
        labels: [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
        ],
        datasets: [
          {
            data: [30, 50, 70, 50, 30, 60, 40],
            backgroundColor: "#0077B5",
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      },
      followers: "100K",
      likes: "456k",
      comments: "567k",
      shares: "456k",
      growth: "+15.3%",
    },
    tiktok: {
      icon: <FaTiktok />,
      color: "#B40818",
      barData: {
        labels: [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
        ],
        datasets: [
          {
            data: [100, 150, 200, 150, 100, 180, 120],
            backgroundColor: "#000000",
            borderRadius: 6,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      },
      followers: "1.2M",
      likes: "5678k",
      comments: "6789k",
      shares: "5678k",
      growth: "+30.7%",
    },
  };

  const { barData, followers, likes, comments, shares, growth } =
    platformData[selectedPlatform];

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

  return (
    <div className="min-vh-100">
      <Container fluid className="py-5">
        {/* Social Media Platforms */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-5 justify-content-center">
              {Object.entries(platformData).map(([platform, data]) => (
                <Card
                  key={platform}
                  className={`social-card border-0 rounded-4 mb-5 shadow ${
                    selectedPlatform === platform
                      ? "active-card shadow"
                      : "shadow"
                  } text-center`}
                  style={{
                    width: "15%",
                    minWidth: "20rem",
                  }}
                  onClick={() => setSelectedPlatform(platform)}
                >
                  <Card.Body className="">
                    <div
                      className="mb-4 text-center "
                      style={{ fontSize: "3rem", color: data.color }}
                    >
                      {data.icon}
                    </div>
                    <h2
                      className="fw-medium text-center  mb-1"
                      style={{ fontSize: "3rem" }}
                    >
                      {data.followers}
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
                  {/* Followers Chart */}
                  <Col
                    md={12}
                    lg={5}
                    className=" p-4 rounded-4 order-1 order-lg-0"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    <h5 className="mb-4 fs-2 text-dark">
                      {selectedPlatform.charAt(0).toUpperCase() +
                        selectedPlatform.slice(1)}{" "}
                      Followers
                    </h5>
                    <div style={{ height: "16rem" }}>
                      <Bar data={barData} options={barOptions} />
                    </div>
                  </Col>
                  {/* Engagement Metrics */}
                  <Col md={8} lg={4} className="mx-auto order-1 order-lg-0">
                    <div className="d-flex flex-column h-100 justify-content-between">
                      {/* Using IconContext.Provider to ensure consistent icon sizing */}
                      <IconContext.Provider value={{ size: "24px" }}>
                        {updatedStats.map((item) => (
                          <Card
                            key={item.id}
                            className="rounded-4 py-2 mb-3"
                            style={{ backgroundColor: item.bgColor }}
                          >
                            <Card.Body className="p-3 d-flex align-items-center ">
                              {/* Icon */}
                              <div className={`me-3 ${item.color}`}>
                                {item.icon}
                              </div>

                              {/* Label & Count */}
                              <div className="flex-grow-1">
                                <h6 className="mb-0 fs-5">{item.label}</h6>
                                <h5 className=" mb-0 fs-6 fw-medium text-muted">
                                  {item.id === "shares"
                                    ? shares
                                    : item.id === "likes"
                                    ? likes
                                    : item.id === "comments"
                                    ? comments
                                    : ""}
                                </h5>
                              </div>

                              {/* Chart */}
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
                  {/* Profile Section */}
                  <Col md={3} lg={2} className="mx-auto">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                      <div className="position-relative">
                        <div
                          style={{
                            width: "12rem",
                            height: "12rem",
                            border: "0.4rem solid  #A8F1FF",
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
                            selectedPlatform === platform.name ? (
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
                        </div>{" "}
                      </div>
                      <h4 className="pt-3 text-success fw-bold">{growth}</h4>
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
