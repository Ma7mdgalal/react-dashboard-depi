"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Image,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from "@images/myPhoto.png";

const Competitor = () => {
  const [competitorsData, setCompetitorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3000/competitors")
      .then((res) => {
        setCompetitorsData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching competitor data:", err);
        setError("Failed to load competitor data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderCompetitorCard = (competitor) => (
    <Card
      key={competitor.id}
      className="h-100 shadow-sm"
      style={{ border: "none", backgroundColor: "#F5F5F5" }}
    >
      <Card.Body className="d-flex flex-column">
        {/* Avatar */}
        <div className="mb-3 d-flex justify-content-center">
          <Image
            src={competitor.avatar} // Path comes from db.json
            alt={`${competitor.name} Avatar`}
            roundedCircle
            className="img-fluid"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "4px solid #A8F1FF",
              backgroundColor: "#E0E0E0",
            }}
            onError={(e) => {
              const photoSrc = typeof Photo === "string" ? Photo : Photo.src;
              if (e.target.src !== photoSrc) {
                e.target.onerror = null;
                e.target.src = photoSrc;
              }
            }}
          />
        </div>

        {/* Stats */}
        <div className="mb-4 text-center flex-grow-1">
          {/* Followers */}
          <h3 className="display-6 mb-1" style={{ color: "#444" }}>
            {competitor.followers}
          </h3>
          <p className="text-black fw-bold" style={{ fontSize: "1.5rem" }}>
            followers
          </p>

          {/* Detailed Stats Grid */}
          <Container className="mt-3 px-1">
            <Row className="row-cols-1 row-cols-sm-1 g-4">
              <Col className="text-center">
                <h5 className="text-secondary mb-0">
                  {competitor.likesPerDay}
                </h5>
                <small className="text-muted">likes/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">
                  {competitor.commentsPerDay}
                </h5>
                <small className="text-muted">comments/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">
                  {competitor.sharesPerDay}
                </h5>
                <small className="text-muted">shares/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">
                  {competitor.postsPerWeek}
                </h5>
                <small className="text-muted">posts/week</small>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Sample Post Card */}
        <Card
          className="mt-auto"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E0E0",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <Card.Body className="p-3">
            {/* Post Header */}
            <div className="d-flex align-items-center mb-3">
              <Image
                src={competitor.avatar} // Use competitor avatar again
                alt={`${competitor.name} Post Avatar`}
                roundedCircle
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "cover",
                  marginRight: "10px",
                  border: "2px solid #A8F1FF",
                  backgroundColor: "#E0E0E0",
                }}
                // Inline onError handler referencing imported Photo
                onError={(e) => {
                  const photoSrc =
                    typeof Photo === "string" ? Photo : Photo.src;
                  if (e.target.src !== photoSrc) {
                    e.target.onerror = null;
                    e.target.src = photoSrc;
                  }
                }}
              />
              <div>
                <h6 className="mb-0" style={{ fontWeight: 600 }}>
                  {competitor.name}
                </h6>
                <small className="text-muted">
                  {competitor.samplePost?.timestamp || "Recently"} · 🌍
                </small>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-3">
              <p
                className="mb-0 text-start"
                style={{ fontSize: "14px", lineHeight: "1.4" }}
                dangerouslySetInnerHTML={{
                  __html:
                    competitor.samplePost?.content || "Sample post content...",
                }}
              />
            </div>

            {/* Post Reactions */}
            <div className="d-flex align-items-center mb-2">
              {competitor.samplePost?.reactions?.map((reaction) => (
                <span
                  key={reaction.id}
                  className="emoji"
                  style={{
                    fontSize: "16px",
                    cursor: "pointer",
                    userSelect: "none",
                    marginRight: "2px",
                  }}
                >
                  {reaction.emoji}
                </span>
              ))}
              <small className="text-muted ms-2">
                {competitor.samplePost?.likesCount || 0} likes
              </small>
            </div>

            {/* Comments and Shares */}
            <div
              className="d-flex justify-content-between text-muted"
              style={{
                fontSize: "13px",
                borderTop: "1px solid #eee",
                paddingTop: "8px",
              }}
            >
              <span>{competitor.samplePost?.commentsCount || 0} Comments</span>
              <span>{competitor.samplePost?.sharesCount || 0} Shares</span>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#FAFAFA" }}>
      <Container className="py-4">
        {/* Filter Controls */}
        <Row className="mb-4 gx-3 gy-2 align-items-center">
          <Col xs={12} sm={6} lg={3}>
            <Form.Control
              type="text"
              placeholder="Compare..."
              className="mb-2 mb-lg-0"
              style={{ border: "1px solid #A8F1FF", borderRadius: "0.5rem" }}
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Form.Control
              type="text"
              placeholder="Competitor 1..."
              className="mb-2 mb-lg-0"
              style={{ border: "1px solid #A8F1FF", borderRadius: "0.5rem" }}
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Form.Control
              type="text"
              placeholder="Competitor 2..."
              className="mb-2 mb-lg-0"
              style={{ border: "1px solid #A8F1FF", borderRadius: "0.5rem" }}
            />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Form.Select
              style={{ border: "1px solid #A8F1FF", borderRadius: "0.5rem" }}
            >
              <option>Select Platform</option>
              <option value="all">All Platforms</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              {/* Add other platforms */}
            </Form.Select>
          </Col>
        </Row>

        {/* Loading State */}
        {loading && (
          <div className="text-center p-5">
            <Spinner
              animation="border"
              role="status"
              style={{ color: "#A8F1FF" }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="text-muted mt-2">Loading Competitors...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center p-5 text-danger">
            <p>{error}</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && !error && (
          <Row xs={1} sm={2} lg={3} className="g-4">
            {competitorsData.map((competitor) => (
              <Col key={competitor.id}>{renderCompetitorCard(competitor)}</Col>
            ))}
            {competitorsData.length === 0 && (
              <Col xs={12}>
                <p className="text-center text-muted p-5">
                  No competitor data found.
                </p>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Competitor;
