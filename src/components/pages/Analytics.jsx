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
import { AiFillThunderbolt } from "react-icons/ai";
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

  // Dark palette colors
  const darkPalette = {
    primary: "#4ED7F1", // Indigo
    secondary: "#6FE6FC", // Lighter indigo
    tertiary: "#A8F1FF", // Even lighter indigo
    quaternary: "#A8FFFF", // Lightest indigo
    accent: "#6FE6FC", // Darker indigo
    highlight: "#A8F1FF", // Darkest indigo
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
              data: [25, 25, 25, 25],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Likes", "Comments", "Shares", "Follow"],
          datasets: [
            {
              data: [35, 25, 30, 10],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Likes", "Comments", "Shares", "Follow"],
          datasets: [
            {
              data: [50, 10, 25, 15],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
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
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Organic", "Paid", "Direct", "Referral"],
          datasets: [
            {
              data: [40, 25, 20, 15],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Organic", "Paid", "Direct", "Referral"],
          datasets: [
            {
              data: [30, 30, 30, 10],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
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
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Weekly: {
          labels: ["Mobile", "Desktop", "Tablet", "Other"],
          datasets: [
            {
              data: [55, 30, 10, 5],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
              borderWidth: 0,
            },
          ],
        },
        Daily: {
          labels: ["Mobile", "Desktop", "Tablet", "Other"],
          datasets: [
            {
              data: [65, 20, 10, 5],
              backgroundColor: [
                darkPalette.primary,
                darkPalette.secondary,
                darkPalette.tertiary,
                darkPalette.quaternary,
              ],
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
                return index === 6 || index === 9
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 2 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 4 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 6 || index === 9
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 2 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 4 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 6 || index === 9
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 2 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
                return index === 4 || index === 5
                  ? darkPalette.highlight
                  : darkPalette.secondary;
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
              borderColor: darkPalette.primary,
              backgroundColor: "rgba(63, 81, 181, 0.2)",
              tension: 0.4,
              pointBackgroundColor: darkPalette.primary,
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
      <div
        className="d-flex justify-content-center align-items-center mb-1 "
        key={label}
      >
        <div
          className="me-2"
          style={{
            width: "1rem",
            height: "1rem",
            backgroundColor: chartData.pie.datasets[0].backgroundColor[index],
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
        <AiFillThunderbolt style={{ color: "#4ED7F1" }} className="mx-1 mt-1" />

        {value}
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

  return (
    <div className="min-vh-100">
      {/* Global filter controls - Now in top right */}
      <Container fluid>
        <Row>
          <Col md={12} className="d-flex justify-content-start">
            <Card
              className="border-0"
              style={{ backgroundColor: "#EFF1F5", borderRadius: "2rem" }}
            >
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                  <h6 className="mb-2 mb-md-0 fw-semibold text-black">
                    Dashboard Controls
                  </h6>
                  <div className="d-flex flex-wrap gap-3">
                    <div
                      className="flex-grow-1"
                      style={{ minWidth: "140px", maxWidth: "200px" }}
                    >
                      <FilterDropdown
                        title="Time Range"
                        value={timeRange}
                        options={["Daily", "Weekly", "Monthly"]}
                        onChange={setTimeRange}
                        className="w-100"
                      />
                    </div>
                    <div
                      className="flex-grow-1"
                      style={{ minWidth: "140px", maxWidth: "200px" }}
                    >
                      <FilterDropdown
                        title="Metric Type"
                        value={metricType}
                        options={["Engagement", "Reach", "Impressions"]}
                        onChange={setMetricType}
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          {/* Overview */}
          <Col md={12} lg={4} className="mb-3 mt-5">
            <Card
              className="shadow-sm rounded-4 border-0"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <Card.Body className="p-4">
                <h5 className="mb-5">Overview</h5>

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
          <Col md={12} lg={8} className="mb-3 ">
            <Card
              className="shadow-sm rounded-4 mb-1 border-0"
              style={{ backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="p-3">
                <h5 className="mb-3">
                  {metricType} Distribution - {timeRange}
                </h5>
                <div
                  className="d-flex justify-content-center"
                  style={{ height: "13rem" }}
                >
                  {chartData.pie.labels && (
                    <Pie data={chartData.pie} options={chartOptions.pie} />
                  )}
                </div>
                <div className="mt-3">{renderPieLegend()}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <Card
              className="shadow-sm rounded-4 mb-4 border-0 py-4 "
              style={{ backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="p-4 ">
                <h5 className="mb-3">
                  {metricType} Trends - {timeRange}
                </h5>
                <div style={{ height: "15rem" }}>
                  {chartData.bar.labels && (
                    <Bar data={chartData.bar} options={chartOptions.bar} />
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Growth Chart - Line */}
          <Col md={12} lg={6} className="mt-4">
            <Card
              className="shadow-sm rounded-4 mb-4 border-0"
              style={{ backgroundColor: "#FAFAFA" }}
            >
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
