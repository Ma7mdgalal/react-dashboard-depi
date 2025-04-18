import React, { useState } from "react";
import myPhoto from "./myPhoto.png";
import instagramIcon from "../../assets/images/instagram.png";
import facebookIcon from "../../assets/images/facebook.png";
import tiktokIcon from "../../assets/images/tiktok.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import twitterIcon from "../../assets/images/twitter.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
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
  const [stats, setStats] = useState([
    {
      id: "likes",
      icon: "❤",
      fontAwesome: "fas fa-heart",
      color: "text-danger",
      label: "Total Likes",
    },
    {
      id: "comments",
      icon: "💬",
      fontAwesome: "fas fa-comment",
      color: "text-secondary",
      label: "Total Comments",
    },
    {
      id: "shares",
      icon: "🔄",
      fontAwesome: "fas fa-share-alt",
      color: "text-info",
      label: "Total Shares",
    },
  ]);

  const platformData = {
    facebook: {
      icon: <FaFacebookF />,
      color: "#4267B2",
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
            backgroundColor: "#4267B2",
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
      color: "#4488",
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
            backgroundColor: "#E1306C",
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
            backgroundColor: "#1DA1F2",
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
      color: "#000000",
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
        borderColor: "#FFC107",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  });

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
  };
  const [platformIcons] = useState([
    { name: "instagram", icon: instagramIcon },
    { name: "facebook", icon: facebookIcon },
    { name: "twitter", icon: twitterIcon },
    { name: "linkedin", icon: linkedinIcon },
    { name: "tiktok", icon: tiktokIcon },
  ]);
  return (
    <div className="min-vh-100">
      <Container fluid className="py-5">
        {/* Social Media Platforms */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap gap-5 justify-content-center ">
              {Object.entries(platformData).map(([platform, data]) => (
                <Card
                  key={platform}
                  className={`social-card border-0 rounded-4 mb-5 ${
                    selectedPlatform === platform ? "active-card" : ""
                  } text-center`}
                  style={{
                    width: "17%",
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
                    <p className="text-muted fs-4">Followers</p>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="shadow border-0  rounded-5 pt-4">
              <Card.Body className="py-5 px-lg-4 px-1">
                <Row className="gap-4">
                  {/* Followers Chart */}
                  <Col
                    md={12}
                    lg={5}
                    className="shadow p-4 rounded-4 order-3 order-lg-0"
                  >
                    <h5 className="mb-4 fs-2">
                      {selectedPlatform.charAt(0).toUpperCase() +
                        selectedPlatform.slice(1)}{" "}
                      Followers
                    </h5>
                    <div style={{ height: "15rem" }}>
                      <Bar data={barData} options={barOptions} />
                    </div>
                  </Col>
                  {/* Engagement Metrics */}
                  <Col md={8} lg={4} className="mx-auto order-1 order-lg-0">
                    <div className="d-flex flex-column h-100 justify-content-between">
                      {stats.map((item) => (
                        <Card
                          key={item.id}
                          className="shadow rounded-4 py-2 mb-3 "
                        >
                          <Card.Body className="p-3 d-flex align-items-center ">
                            {/* Icon */}
                            <div className={`me-3 ${item.color}`}>
                              <span className="fs-2">{item.icon}</span>
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
                            border: "0.3rem solid #FFC107",
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
