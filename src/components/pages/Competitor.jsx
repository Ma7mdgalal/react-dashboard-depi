import { CompetitorCard } from "./CompetitorCard";
import { competitors } from "@Util/index.js";

import { Container, Row, Col, Form } from "react-bootstrap";

const Competitor = () => {
  return (
    <div className="min-vh-100">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Form.Control
            type="text"
            placeholder="Compare..."
            style={{
              width: "250px",
              border: "1px solid #fbb503",
            }}
          />
          <Form.Control
            type="text"
            placeholder="Competitor1"
            style={{
              width: "250px",
              border: "1px solid #fbb503",
            }}
          />
          <Form.Control
            type="text"
            placeholder="Competitor2"
            style={{ width: "250px", border: "1px solid #fbb503" }}
          />
          <Form.Select style={{ width: "200px", border: "1px solid #fbb503" }}>
            <option>Select Item</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="tiktok">TikTok</option>
          </Form.Select>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {competitors.map((competitor, index) => (
            <Col key={index}>
              <CompetitorCard stats={competitor} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Competitor;
