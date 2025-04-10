"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
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
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // State for dropdown selections
  const [timeRange, setTimeRange] = useState("Monthly");
  const [metricType, setMetricType] = useState("Engagement");

  // Chart data based on selections
  const [chartData, setChartData] = useState({
    pie: {},
    bar: {},
    line: {},
  });

  // Geographic data for world map
  const [geoData] = useState({
    regions: [
      { name: "North America", value: 35, lat: 40, lng: -100 },
      { name: "South America", value: 15, lat: -15, lng: -60 },
      { name: "Europe", value: 25, lat: 50, lng: 10 },
      { name: "Africa", value: 10, lat: 0, lng: 20 },
      { name: "Asia", value: 30, lat: 30, lng: 100 },
      { name: "Australia", value: 5, lat: -25, lng: 135 },
    ],
  });

  // Chart configuration options
  const chartOptions = {
    bar: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        x: { grid: { display: false } },
        y: { display: false, grid: { display: false } },
      },
    },
    pie: {
      responsive: true,
      plugins: { legend: { display: false } },
      cutout: "0%",
    },
    line: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { beginAtZero: true },
      },
    },
  };

  // Sample data maps for different selections
  const dataMap = {
    // Pie chart data variations
    pie: {
      Engagement: {
        Monthly: {
          labels: ["Likes", "Comments", "Shares", "Follow"],
          datasets: [
            {
              data: [41, 17, 41, 41],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Likes", "Comments", "Shares", "Follow"],
          datasets: [
            {
              data: [35, 25, 30, 10],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Likes", "Comments", "Shares", "Follow"],
          datasets: [
            {
              data: [50, 10, 25, 15],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
      },
      Reach: {
        Monthly: {
          labels: ["Organic", "Paid", "Direct", "Referral"],
          datasets: [
            {
              data: [45, 20, 25, 10],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Organic", "Paid", "Direct", "Referral"],
          datasets: [
            {
              data: [40, 25, 20, 15],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Organic", "Paid", "Direct", "Referral"],
          datasets: [
            {
              data: [30, 30, 30, 10],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
      },
      Impressions: {
        Monthly: {
          labels: ["Mobile", "Desktop", "Tablet", "Other"],
          datasets: [
            {
              data: [60, 25, 10, 5],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Mobile", "Desktop", "Tablet", "Other"],
          datasets: [
            {
              data: [55, 30, 10, 5],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Mobile", "Desktop", "Tablet", "Other"],
          datasets: [
            {
              data: [65, 20, 10, 5],
              backgroundColor: ["#FFC107", "#FFE082", "#FFECB3", "#ffe4c4"],
              borderWidth: 0,
            },
          ],
        },
      },
    },

    // Bar chart data variations
    bar: {
      Engagement: {
        Monthly: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
          datasets: [
            {
              data: [65, 45, 75, 55, 80, 65, 90, 70, 85, 95],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 6 || index === 9 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Weekly: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [45, 65, 85, 55, 70, 95, 60],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 2 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Daily: {
          labels: ["8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"],
          datasets: [
            {
              data: [30, 45, 75, 60, 80, 90, 70, 40],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 4 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
      },
      Reach: {
        Monthly: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
          datasets: [
            {
              data: [80, 60, 85, 70, 90, 75, 95, 85, 90, 100],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 6 || index === 9 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Weekly: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [60, 75, 90, 70, 85, 100, 80],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 2 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Daily: {
          labels: ["8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"],
          datasets: [
            {
              data: [40, 55, 80, 65, 90, 95, 85, 50],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 4 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
      },
      Impressions: {
        Monthly: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
          datasets: [
            {
              data: [100, 85, 110, 90, 120, 105, 130, 115, 125, 140],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 6 || index === 9 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Weekly: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [90, 110, 140, 100, 120, 150, 120],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 2 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
        Daily: {
          labels: ["8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"],
          datasets: [
            {
              data: [70, 95, 130, 105, 140, 150, 120, 85],
              backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 4 || index === 5 ? "#FFC107" : "#FFECB3";
              },
              borderRadius: 10,
              borderSkipped: false,
            },
          ],
        },
      },
    },

    // Line chart data variations
    line: {
      Engagement: {
        Monthly: {
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
        },
        Weekly: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [
            {
              label: "Growth",
              data: [5000, 15000, 10000, 20000, 18000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
        Daily: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Growth",
              data: [2000, 4000, 3000, 5000, 4500, 6000, 4000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
      },
      Reach: {
        Monthly: {
          labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
          datasets: [
            {
              label: "Growth",
              data: [8000, 25000, 18000, 40000, 30000, 45000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
        Weekly: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [
            {
              label: "Growth",
              data: [8000, 18000, 12000, 25000, 22000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
        Daily: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Growth",
              data: [3000, 5000, 4000, 7000, 6000, 8000, 5000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
      },
      Impressions: {
        Monthly: {
          labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
          datasets: [
            {
              label: "Growth",
              data: [10000, 30000, 20000, 50000, 40000, 60000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
        Weekly: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [
            {
              label: "Growth",
              data: [10000, 22000, 15000, 30000, 25000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
        Daily: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Growth",
              data: [4000, 7000, 5000, 9000, 8000, 11000, 7000],
              borderColor: "#FFC107",
              backgroundColor: "rgba(255, 193, 7, 0.2)",
              tension: 0.4,
              pointBackgroundColor: "#FFC107",
              pointBorderColor: "#FFF",
              pointBorderWidth: 2,
              pointRadius: 6,
            },
          ],
        },
      },
    },
  };

  // Helper function to render legend items for pie chart
  const renderPieLegend = () => {
    if (!chartData.pie.labels) return null;

    return chartData.pie.labels.map((label, index) => (
      <div className="d-flex align-items-center mb-2" key={label}>
        <div
          className="me-2"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: chartData.pie.datasets[0].backgroundColor[index],
            borderRadius: "50%",
          }}
        ></div>
        <span>{label}</span>
        <span className="ms-auto">
          {chartData.pie.datasets[0].data[index]}%
        </span>
      </div>
    ));
  };

  // Update chart data when selections change
  useEffect(() => {
    setChartData({
      pie: dataMap.pie[metricType][timeRange],
      bar: dataMap.bar[metricType][timeRange],
      line: dataMap.line[metricType][timeRange],
    });
  }, [timeRange, metricType]);

  // Common dropdown component to reduce repetition
  const FilterDropdown = ({ title, value, options, onChange }) => (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        className="w-100 text-start border d-flex align-items-center"
      >
        <span>⚡</span> {value}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item key={option} onClick={() => onChange(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  // Component for map pins with value bubbles
  const MapPin = ({ name, value, lat, lng }) => {
    // Calculate position based on a simple projection
    // This is a basic approximation that works for visualization purposes
    const x = ((lng + 180) / 360) * 100; // Convert longitude to percentage across width
    const y = ((90 - lat) / 180) * 100; // Convert latitude to percentage of height

    return (
      <div
        className="position-absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="rounded-circle bg-warning position-relative"
          style={{
            width: `${Math.max(20, value)}px`,
            height: `${Math.max(20, value)}px`,
            opacity: 0.7,
          }}
        >
          <div
            className="position-absolute bg-white rounded-pill px-2 py-1 shadow-sm"
            style={{
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.75rem",
              whiteSpace: "nowrap",
            }}
          >
            {name}: {value}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-vh-100">
      {/* Global filter controls - Now in top right */}
      <Container fluid className="py-4">
        <Row className="mb-4">
          <Col md={12} className="d-flex justify-content-end">
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Body className="p-3">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 me-3">Dashboard Controls</h6>
                  <div className="me-2" style={{ width: "180px" }}>
                    <FilterDropdown
                      title="Time Range"
                      value={timeRange}
                      options={["Daily", "Weekly", "Monthly"]}
                      onChange={setTimeRange}
                    />
                  </div>
                  <div style={{ width: "180px" }}>
                    <FilterDropdown
                      title="Metric Type"
                      value={metricType}
                      options={["Engagement", "Reach", "Impressions"]}
                      onChange={setMetricType}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Overview */}
          <Col md={5}>
            <Card className="shadow-sm rounded-4 mb-4 border-0 py-4">
              <Card.Body className="p-4">
                <h5 className="mb-4">Overview</h5>

                <div className="bg-white rounded-pill p-3 mb-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-6">Followers : 25.3k</span>
                  <span className="text-success fs-6">+2.5%</span>
                </div>

                <div className="bg-white rounded-pill p-3 mb-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-6">Engagement rate : 5.4%</span>
                  <span className="text-danger fs-6">-1.2%</span>
                </div>

                <div className="bg-white rounded-pill p-3 d-flex justify-content-between align-items-center border">
                  <span className="fw-bold fs-6">Posts published : 90</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Middle chart - Pie */}
          <Col md={3} lg={4}>
            <Card className="shadow-sm rounded-4 mb-4 border-0">
              <Card.Body className="p-4">
                <h5 className="mb-3">
                  {metricType} Distribution - {timeRange}
                </h5>
                <div className="position-relative" style={{ height: "10rem" }}>
                  {chartData.pie.labels && (
                    <Pie data={chartData.pie} options={chartOptions.pie} />
                  )}
                </div>
                <div className="mt-3">{renderPieLegend()}</div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right analysis - Bar */}
          <Col md={4} lg={3}>
            <Card className="shadow-sm rounded-4 mb-4 border-0 py-4">
              <Card.Body className="p-4">
                <h5 className="mb-3">
                  {metricType} Trends - {timeRange}
                </h5>
                <div style={{ height: "10rem" }}>
                  {chartData.bar.labels && (
                    <Bar data={chartData.bar} options={chartOptions.bar} />
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Growth Chart - Line */}
          <Col md={5}>
            <Card className="shadow-sm rounded-4 mb-4 border-0">
              <Card.Body className="p-4">
                <h5 className="mb-3">
                  {metricType} Growth - {timeRange}
                </h5>
                <div style={{ height: "15rem" }}>
                  {chartData.line.labels && (
                    <Line data={chartData.line} options={chartOptions.line} />
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Charts;
