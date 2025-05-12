import { Card, Image, Container, Row, Col } from "react-bootstrap";

export function CompetitorCard({ stats }) {
  return (
    <Card
      className="h-100 shadow-sm"
      style={{ border: "none", backgroundColor: "#F5F5F5" }}
    >
      <Card.Body className="d-flex flex-column">
        {/* Avatar image with responsive sizing */}
        <div className="mb-3 d-flex justify-content-center">
          <Image
            src={stats.avatar}
            alt={stats.name}
            roundedCircle
            className="img-fluid"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              border: "4px solid #A8F1FF",
            }}
          />
        </div>

        <div className="mb-4 text-center flex-grow-1">
          <h3 className="display-6 mb-1" style={{ color: "#F5F5F5" }}>
            {stats.followers}
          </h3>
          <p className="text-black fw-bold" style={{ fontSize: "1.5rem" }}>
            followers
          </p>

          <Container className="mt-3 px-1">
            <Row className="row-cols-2 row-cols-sm-2 g-2">
              <Col className="text-center">
                <h5 className="text-secondary mb-0">{stats.likesPerDay}</h5>
                <small className="text-muted">likes/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">{stats.commentsPerDay}</h5>
                <small className="text-muted">comments/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">{stats.sharesPerDay}</h5>
                <small className="text-muted">shares/day</small>
              </Col>
              <Col className="text-center">
                <h5 className="text-secondary mb-0">{stats.postsPerWeek}</h5>
                <small className="text-muted">posts/week</small>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Sample post card */}
        <Card
          className="mt-auto"
          style={{
            backgroundColor: "#D5D5D5",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <Card.Body className="p-3">
            {/* Post Header */}
            <div className="d-flex align-items-center mb-3">
              <Image
                src={stats.avatar}
                alt={stats.name}
                roundedCircle
                style={{
                  width: "35px",
                  height: "35px",
                  objectFit: "cover",
                  marginRight: "10px",
                  border: "2px solid #A8F1FF",
                }}
              />
              <div>
                <h6 className="mb-0" style={{ fontWeight: 600 }}>
                  {stats.name}
                </h6>
                <small className="text-muted">Just now · 🌍</small>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-3">
              <p
                className="mb-0 text-start"
                style={{ fontSize: "14px", lineHeight: "1.4" }}
              >
                Working on a publication for a continuous series of amazing post
                series.
                <strong> Part 1 coming soon!</strong> Stay tuned!
              </p>
            </div>

            {/* Post Reactions */}
            <div className="d-flex align-items-center mb-2">
              {stats.reactions.map((reaction) => (
                <span
                  key={reaction.id}
                  className="emoji"
                  style={{
                    fontSize: "16px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {reaction.emoji}
                </span>
              ))}
              <small className="text-muted ms-2">
                {stats.reactions.length} likes
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
              <span>98 Comments</span>
              <span>45 Shares</span>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}
