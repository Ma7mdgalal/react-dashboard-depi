import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import profileImage from "../../assets/icons/shrek-animated-character-smiling-face-png-5cbkwo8lfn628tyi-5cbkwo8lfn628tyi.png";

function Dashboard() {
  // State to track which social media platform is selected
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Social media card data with trend arrays for mini charts
  const socialCards = [
    {
      platform: "facebook",
      icon: "bi-facebook",
      color: "#1877F2",
      followers: "280K",
      stats: {
        likes: "852k",
        comments: "1423k",
        shares: "645k",
        growth: "+12.3%",
        monthlyData: [30, 45, 60, 55, 70, 65, 80],
        likesTrend: [30, 40, 50, 45, 60, 55, 70],
        commentsTrend: [20, 30, 25, 35, 40, 38, 45],
        sharesTrend: [15, 20, 18, 22, 30, 28, 35],
      },
    },
    {
      platform: "instagram",
      icon: "bi-instagram",
      color: "#E4405F",
      followers: "680K",
      stats: {
        likes: "1245k",
        comments: "2312k",
        shares: "1245k",
        growth: "+19.9%",
        monthlyData: [40, 65, 75, 60, 65, 70, 85],
        likesTrend: [35, 45, 55, 50, 65, 60, 75],
        commentsTrend: [25, 35, 30, 40, 45, 42, 50],
        sharesTrend: [20, 25, 22, 28, 32, 30, 38],
      },
    },
    {
      platform: "twitter",
      icon: "bi-twitter",
      color: "#1DA1F2",
      followers: "50K",
      stats: {
        likes: "345k",
        comments: "521k",
        shares: "822k",
        growth: "+8.7%",
        monthlyData: [20, 35, 30, 45, 40, 50, 45],
        likesTrend: [15, 25, 20, 30, 25, 35, 30],
        commentsTrend: [10, 15, 12, 18, 14, 20, 16],
        sharesTrend: [5, 10, 8, 12, 10, 15, 12],
      },
    },
    {
      platform: "linkedin",
      icon: "bi-linkedin",
      color: "#0A66C2",
      followers: "100K",
      stats: {
        likes: "456k",
        comments: "312k",
        shares: "189k",
        growth: "+15.2%",
        monthlyData: [25, 40, 35, 50, 45, 55, 60],
        likesTrend: [20, 30, 25, 35, 30, 40, 35],
        commentsTrend: [15, 20, 18, 25, 22, 28, 30],
        sharesTrend: [10, 15, 12, 18, 16, 20, 22],
      },
    },
    {
      platform: "tiktok",
      icon: "bi-tiktok",
      color: "#000000",
      followers: "1.2M",
      stats: {
        likes: "2145k",
        comments: "1845k",
        shares: "3254k",
        growth: "+23.8%",
        monthlyData: [50, 80, 95, 85, 90, 100, 110],
        likesTrend: [45, 70, 85, 75, 80, 90, 100],
        commentsTrend: [35, 55, 65, 60, 62, 70, 80],
        sharesTrend: [25, 40, 50, 45, 48, 55, 65],
      },
    },
  ];

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
  ];

  const handleCardClick = (platform) => {
    setSelectedPlatform(platform);
  };

  // Helper function for generating mini chart paths (for likes, comments, shares)
  const generateMiniChartPath = (data, width = 80, height = 30) => {
    if (!data || data.length === 0) return "";
    const maxData = Math.max(...data);
    const minData = Math.min(...data);
    const range = maxData - minData || 1;
    const step = width / (data.length - 1);
    let d = "";
    data.forEach((point, idx) => {
      const x = idx * step;
      // Invert y because SVG's origin is at the top left.
      const y = height - ((point - minData) / range) * height;
      d += idx === 0 ? `M${x},${y}` : ` L${x},${y}`;
    });
    return d;
  };

  // Extract the current card once to avoid repeated lookups.
  const currentCard = selectedPlatform
    ? socialCards.find((card) => card.platform === selectedPlatform)
    : null;

  // Prepare data for the monthly chart using Recharts.
  // It combines the months and the monthlyData into an array of objects.
  const chartData = currentCard
    ? months.map((month, idx) => ({
        month,
        value: currentCard.stats.monthlyData[idx],
      }))
    : [];

  return (
    <>
      <div className="container py-5">
        {/* Social Media Cards */}
        <div className="row justify-content-center g-4 mb-5">
          {socialCards.map((card, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div
                className={`card shadow-lg h-100 ${
                  selectedPlatform === card.platform
                    ? "border-3 border-primary"
                    : ""
                }`}
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  minHeight: "180px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onClick={() => handleCardClick(card.platform)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-auto">
                    <i
                      className={`bi ${card.icon} fs-1`}
                      style={{ color: card.color }}
                    ></i>
                  </div>
                  <div className="mt-auto">
                    <h2 className="card-title fw-bold mb-0">
                      {card.followers}
                    </h2>
                    <p className="text-secondary mb-0">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Dashboard - Appears when a platform is selected */}
        {selectedPlatform && currentCard && (
          <div className="row">
            <div className="col-12">
              <div className="card shadow-lg">
                <div className="card-body p-4">
                  <div className="row">
                    {/* Left Side - Monthly Bar Chart using Recharts */}
                    <div className="col-md-6">
                      <h4 className="mb-4">
                        {selectedPlatform.charAt(0).toUpperCase() +
                          selectedPlatform.slice(1)}{" "}
                        Monthly Data
                      </h4>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill={currentCard.color} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Right Side - Engagement Stats and Mini Charts */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-8">
                          {/* Total Likes */}
                          <div className="mb-3 card shadow-sm">
                            <div className="card-body p-3 d-flex align-items-center">
                              <div
                                className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: "#ffebee",
                                }}
                              >
                                <i className="bi bi-heart-fill text-danger"></i>
                              </div>
                              <div>
                                <h6 className="mb-0">Total likes</h6>
                                <h4 className="mb-0">
                                  {currentCard.stats.likes}
                                </h4>
                              </div>
                              <div className="ms-auto">
                                <svg width="80" height="30" viewBox="0 0 80 30">
                                  <path
                                    d={generateMiniChartPath(
                                      currentCard.stats.likesTrend
                                    )}
                                    fill="none"
                                    stroke="#ff6b6b"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Total Comments */}
                          <div className="mb-3 card shadow-sm">
                            <div className="card-body p-3 d-flex align-items-center">
                              <div
                                className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: "#e3f2fd",
                                }}
                              >
                                <i className="bi bi-chat-fill text-primary"></i>
                              </div>
                              <div>
                                <h6 className="mb-0">Total comments</h6>
                                <h4 className="mb-0">
                                  {currentCard.stats.comments}
                                </h4>
                              </div>
                              <div className="ms-auto">
                                <svg width="80" height="30" viewBox="0 0 80 30">
                                  <path
                                    d={generateMiniChartPath(
                                      currentCard.stats.commentsTrend
                                    )}
                                    fill="none"
                                    stroke="#4caf50"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Total Shares */}
                          <div className="mb-3 card shadow-sm">
                            <div className="card-body p-3 d-flex align-items-center">
                              <div
                                className="me-3 rounded-circle d-flex align-items-center justify-content-center"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  backgroundColor: "#e8eaf6",
                                }}
                              >
                                <i className="bi bi-share-fill text-indigo"></i>
                              </div>
                              <div>
                                <h6 className="mb-0">Total shares</h6>
                                <h4 className="mb-0">
                                  {currentCard.stats.shares}
                                </h4>
                              </div>
                              <div className="ms-auto">
                                <svg width="80" height="30" viewBox="0 0 80 30">
                                  <path
                                    d={generateMiniChartPath(
                                      currentCard.stats.sharesTrend
                                    )}
                                    fill="none"
                                    stroke="#3f51b5"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profile Image Section */}
                        <div className="col-md-4">
                          <div className="text-center">
                            <div className="position-relative d-inline-block mb-2">
                              <div
                                className="rounded-circle overflow-hidden"
                                style={{
                                  width: "120px",
                                  height: "120px",
                                  border: "3px solid white",
                                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                }}
                              >
                                <img
                                  src={profileImage}
                                  width={100}
                                  height={110}
                                  alt="Profile"
                                  className=""
                                />
                              </div>
                              <div className="position-absolute bottom-0 end-0 bg-white rounded-circle p-1 shadow">
                                <i
                                  className={`bi ${currentCard.icon}`}
                                  style={{
                                    color: currentCard.color,
                                    fontSize: "1.5rem",
                                  }}
                                ></i>
                              </div>
                            </div>
                            <div className="text-success fw-bold mt-2">
                              {currentCard.stats.growth}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Right Side */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
