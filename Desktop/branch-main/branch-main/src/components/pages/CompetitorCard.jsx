import { Card, Image, Container, Row, Col } from "react-bootstrap";

export function CompetitorCard({ stats }) {
  return (
    <Card className="h-100 shadow-sm" style={{ border: "none" }}>
      <Card.Body className="text-center">
        <div className="mb-3 d-flex justify-content-center">
          <Image
            src={stats.avatar}
            alt={stats.name}
            roundedCircle
            className="border border-warning"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="mb-4">
          <h3 className="display-6 mb-1" style={{ color: "#fbb503" }}>
            {stats.followers}
          </h3>
          <p className="text-muted" style={{ fontSize: "24px" }}>
            followers
          </p>

          <Container className="mt-3">
            <Row xs={2} className="g-3">
              <Col>
                <h4 className="text-warning">{stats.likesPerDay}</h4>
                <small className="text-muted">likes/day</small>
              </Col>
              <Col>
                <h4 className="text-warning">{stats.commentsPerDay}</h4>
                <small className="text-muted">comments/day</small>
              </Col>
              <Col>
                <h4 className="text-warning">{stats.sharesPerDay}</h4>
                <small className="text-muted">shares/day</small>
              </Col>
              <Col>
                <h4 className="text-warning">{stats.postsPerWeek}</h4>
                <small className="text-muted">posts/week</small>
              </Col>
            </Row>
          </Container>
        </div>
        <Card
          style={{
            backgroundColor: "#D9D9D9CC",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}>
          <Card.Body style={{ padding: 0 }}>
            {/* Post Header */}
            <div className="d-flex align-items-center mb-3">
              <Image
                src={stats.avatar}
                alt={stats.name}
                roundedCircle
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  marginRight: "10px",
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
                className="mb-0"
                style={{ fontSize: "15px", lineHeight: "1.5" }}>
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
                    fontSize: "20px",
                    marginRight: "6px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}>
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
                fontSize: "14px",
                borderTop: "1px solid #eee",
                paddingTop: "8px",
              }}>
              <span>98 Comments</span>
              <span>45 Shares</span>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}
