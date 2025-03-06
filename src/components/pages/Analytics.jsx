"use client"
import world from './image.png'
import { useState } from "react"
import { Container, Row, Col, Card, Navbar, Nav, Dropdown } from "react-bootstrap"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Pie, Line } from "react-chartjs-2"
import "bootstrap/dist/css/bootstrap.min.css"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

const Charts = () => {
  // State for dropdown selections
  const [selectedItem1, setSelectedItem1] = useState("Select Item")
  const [selectedItem2, setSelectedItem2] = useState("Select Item")

  // Pie chart data
  const pieData = {
    labels: ["Likes", "Comments", "Shares", "Follow"],
    datasets: [
      {
        data: [41, 17, 41, 41],
        backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#FFF8E1"],
        borderWidth: 0,
      },
    ],
  }

  // Bar chart data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        data: [65, 45, 75, 55, 80, 65, 90, 70, 85, 95],
        backgroundColor: (context) => {
          const index = context.dataIndex
          return index === 6 || index === 9 ? "#FFC107" : "#FFECB3"
        },
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  }

  // Line chart data
  const lineData = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Growth",
        data: [5000, 22000, 15000, 35000, 20000, 28000],
        borderColor: "#FFC107",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#FFC107",
        pointBorderColor: "#FFF",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  }

  // Chart options
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
  }

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "0%",
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div className=" min-vh-100">
 
 

      {/* all the charts //the main page */}
      <Container fluid className="py-4">
        <Row>
          {/* Over View */}
          <Col md={5}>
            <Card className="shadow-sm rounded-4 mb-4 border-0 py-4">
              <Card.Body className="p-4">
                <h5 className="mb-4">Over view</h5>

                <div className="bg-white rounded-pill p-3 mb-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-4">Followers : 25.3k</span>
                  <span className="text-success fs-4">+2.5%</span>
                </div>

                <div className="bg-white rounded-pill p-3 mb-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-4">Engagement rate : 5.4%</span>
                  <span className="text-danger fs-4">-1.2%</span>
                </div>

                <div className="bg-white rounded-pill p-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-4">Posts published : 90</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* middle chart */}
          <Col md={3} lg={4}>
            <Card className="shadow-sm rounded-4 mb-4 border-0">
              <Card.Body className="p-4">
                <div className="position-relative" style={{ height: "200px" }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
                <div className="mt-3">
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2"
                      style={{ width: "10px", height: "10px", backgroundColor: "#FFC107", borderRadius: "50%" }}
                    ></div>
                    <span>Likes</span>
                    <span className="ms-auto">41%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2"
                      style={{ width: "10px", height: "10px", backgroundColor: "#FFE082", borderRadius: "50%" }}
                    ></div>
                    <span>comments</span>
                    <span className="ms-auto">17%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="me-2"
                      style={{ width: "10px", height: "10px", backgroundColor: "#FFECB3", borderRadius: "50%" }}
                    ></div>
                    <span>shares</span>
                    <span className="ms-auto">41%</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div
                      className="me-2"
                      style={{ width: "10px", height: "10px", backgroundColor: "#FFF8E1", borderRadius: "50%" }}
                    ></div>
                    <span>Follow</span>
                    <span className="ms-auto">41%</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right analysis */}
          <Col md={4} lg={3}>
            <Card className="shadow-sm rounded-4 mb-4 border-0 py-4">
              <Card.Body className="p-4">
                <Row className="mb-3">
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" className="w-100 text-start border d-flex align-items-center">
                        <i className="fas fa-bolt me-2"></i>
                        <span>⚡</span> {selectedItem1}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSelectedItem1("Daily")}>Daily</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem1("Weekly")}>Weekly</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem1("Monthly")}>Monthly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" className="w-100 text-start border d-flex align-items-center">
                        <i className="fas fa-bolt me-2"></i>
                        <span>⚡</span> {selectedItem2}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSelectedItem2("Engagement")}>Engagement</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem2("Reach")}>Reach</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedItem2("Impressions")}>Impressions</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
                <div style={{ height: "200px" }}>
                  <Bar data={barData} options={barOptions} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* World Map */}
          <Col md={7}>
            <Card className="shadow-sm rounded-4 mb-4 border-0">
              <Card.Body className="p-4">
                <div className="d-flex">
                  <div className="me-5">
                    <div className="mb-2">North America</div>
                    <div className="mb-2">South America</div>
                    <div className="mb-2">Europe</div>
                    <div className="mb-2">Africa</div>
                    <div className="mb-2">Asia</div>
                    <div>Australia</div>
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <img
                      src={world}
                      alt="World map with engagement hotspots"
                      className="img-fluid opacity-25"
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                    {/* This is a placeholder. In a real implementation, you would use a proper map visualization library */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Growth Chart */}
          <Col md={5}>
            <Card className="shadow-sm rounded-4 mb-4 border-0">
              <Card.Body className="p-4">
                <div style={{ height: "250px" }}>
                  <Line data={lineData} options={lineOptions} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Charts