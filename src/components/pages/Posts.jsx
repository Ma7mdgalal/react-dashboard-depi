"use client";
import Photo from "@images/myPhoto.png";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Card, Form, InputGroup } from "react-bootstrap";
import { ChevronDown, ThreeDots, Lightning, Send } from "react-bootstrap-icons";
import { AiFillThunderbolt } from "react-icons/ai";

function Posts() {
  // Demographics data in state
  const [countriesData] = useState([
    { name: "USA", percentage: "35%" },
    { name: "UK", percentage: "25%" },
    { name: "Egypt", percentage: "15%" },
  ]);

  const [ageData] = useState([
    { range: "18-24", percentage: "35%" },
    { range: "25-34", percentage: "25%" },
    { range: "35-44", percentage: "15%" },
  ]);

  const [activityData] = useState([
    { time: "10Am-2pm", percentage: "35%" },
    { time: "6Pm-9pm", percentage: "25%" },
  ]);

  // Dropdown menu items
  const [dropdownItems] = useState([
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
  ]);

  // Reaction icons data
  const [reactionIcons] = useState([
    { id: 1, emoji: "👍", color: "#1877F2" },
    { id: 2, emoji: "❤️", color: "#E41E3F" },
    { id: 3, emoji: "😄", color: "#F7B928" },
  ]);

  // Insight cards data
  const [insightCards] = useState([
    {
      id: 1,
      title: "Top countries",
      data: countriesData,
      renderItem: (item, index) => (
        <div key={index} className="d-flex justify-content-between mb-3">
          <span className="fw-medium">{item.name}</span>
          <span className="text-secondary">({item.percentage})</span>
        </div>
      ),
    },
    {
      id: 2,
      title: "Age",
      data: ageData,
      renderItem: (item, index) => (
        <div key={index} className="d-flex justify-content-between mb-3">
          <span className="fw-medium">{item.range}</span>
          <span className="text-secondary">({item.percentage})</span>
        </div>
      ),
    },
    {
      id: 3,
      title: "Peak Activity times",
      data: activityData,
      renderItem: (item, index) => (
        <div key={index} className="d-flex justify-content-between mb-3">
          <span className="fw-medium">{item.time}</span>
          <span className="text-secondary">({item.percentage})</span>
        </div>
      ),
    },
  ]);

  // Top posts data in state
  const [topPosts] = useState([
    {
      id: 1,
      author: "Omar Hassan",
      date: "6 Feb at 19:36",
      content:
        "Success is not a destination, it's a continuous journey of learning and growth. Don't compare yourself to others—compare yourself to who you were yesterday. Keep moving forward, because every ......",
      reactions: 210,
      comments: 36,
      shares: 12,
    },
    {
      id: 2,
      author: "Omar Hassan",
      date: "2 Feb at 14:22",
      content:
        "Ambition is the spark that ignites the fire of achievement. Don't wait for opportunities—create them. Remember, great people were not born great; they built their greatness through patience, hard work...",
      reactions: 210,
      comments: 35,
      shares: 12,
    },
    {
      id: 3,
      author: "Omar Hassan",
      date: "19 Sep at 20:22",
      content:
        "Building yourself starts from within, from the thoughts you embrace and the principles you believe in. Be the person you dream of becoming, and never let fear stop you from taking the first step......",
      reactions: 210,
      comments: 35,
      shares: 12,
    },
  ]);

  // Chatbot messages in state
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      message:
        "Hi! What topic or theme would you like your social media post to be about?",
    },
    {
      sender: "user",
      message: "I want a post about the benefits of morning workouts.",
    },
    {
      sender: "bot",
      message:
        "Great choice! Would you like the post to be motivational, informative, or casual?",
    },
    { sender: "user", message: "Motivational." },
  ]);

  const [chatInput, setChatInput] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "user", message: chatInput },
      ]);
      setChatInput("");
    }
  };

  // Reusable dropdown component
  const renderDropdown = () => (
    <Dropdown>
      <Dropdown.Toggle
        variant="light"
        className="border rounded-3 px-3"
        style={{ backgroundColor: "white" }}
      >
        <AiFillThunderbolt style={{ color: "#4ED7F1" }} className="mx-1 fs-5" />
        <span className="me-1">Select Item</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownItems.map((item) => (
          <Dropdown.Item key={item.id} href="#">
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  // Render reaction icons
  const renderReactionIcons = (reactions) => (
    <div>
      {reactionIcons.map((icon) => (
        <span
          key={icon.id}
          className="me-1 rounded-circle d-inline-block"
          style={{ width: "18px", height: "18px", backgroundColor: icon.color }}
        >
          <span
            className="text-white d-flex justify-content-center"
            style={{ fontSize: "10px", marginTop: "2px" }}
          >
            {icon.emoji}
          </span>
        </span>
      ))}
      <span className="text-secondary small">{reactions}</span>
    </div>
  );

  return (
    <div className="">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Main Content Area */}
          <div className="col-lg-8 col-xl-9 p-4">
            {/* Audience Insights */}
            <Card
              className="shadow rounded-4 mb-4"
              style={{ border: "none", backgroundColor: "#FAFAFA" }}
            >
              <Card.Body className="p-4">
                <h5 className="mb-4 fw-bold fs-4">Audience Insights</h5>
                <div className="row g-4">
                  {/* Map through insight cards */}
                  {insightCards.map((card) => (
                    <div key={card.id} className="col-md-4">
                      <Card
                        className="rounded-4 h-100"
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <Card.Body className="p-4 fs-5">
                          <h5 className="text-balck fw-bold text-center mb-4">
                            {card.title}
                          </h5>
                          {card.data.map((item, index) =>
                            card.renderItem(item, index)
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Chatbot */}
            <Card
              className="shadow rounded-4"
              style={{ border: "none", backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="p-4">
                <h5 className=" fs-4 mb-4 fw-bold">Chatbot</h5>
                <div
                  className="chat-container p-3 rounded-3 mb-3"
                  style={{ backgroundColor: "#f0f0f0", minHeight: "180px" }}
                >
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-3 ${
                        msg.sender === "user"
                          ? "d-flex justify-content-end"
                          : ""
                      }`}
                    >
                      <div
                        className={`d-inline-block p-3 rounded-3 fw-bold ${
                          msg.sender === "user" ? "bg-opacity-25" : "bg-white"
                        }`}
                        style={{
                          maxWidth: "50%",
                          backgroundColor:
                            msg.sender === "user" ? "#A8F1FF" : "white",
                          boxShadow:
                            msg.sender === "user"
                              ? "0 1px 3px rgb(0, 0, 0, 1)"
                              : "0 1px 3px rgba(0,0,0,1)",
                        }}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
                <Form onSubmit={handleChatSubmit} className="position-relative">
                  <InputGroup
                    className="rounded-pill overflow-hidden"
                    style={{ backgroundColor: "#FAFAFA", border: "none" }}
                  >
                    <Form.Control
                      placeholder="Ask anything"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="border-0 bg-transparent"
                      style={{ backgroundColor: "#FAFAFA", boxShadow: "none" }}
                    />
                    <div
                      className="position-absolute"
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <span style={{ color: "#4ED7F1" }}>
                        <Send size={25} />
                      </span>
                    </div>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
          </div>

          {/* Top 3 Posts Sidebar */}
          <div className="col-xl-3 col-lg-4 col-md-6 d-flex py-4 align-items-center">
            <Card
              className="rounded-4 shadow border-0 m-1 "
              style={{ backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="p-4 d-flex flex-column m-0">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="text-black fw-bold m-0">Top 3 posts</h5>
                  {renderDropdown()}
                </div>

                <div className="flex-grow-1">
                  {topPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className={`${index < topPosts.length - 1 ? "mb-4" : ""}`}
                    >
                      <Card
                        className="border-0   rounded-4"
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <Card.Body className="p-3">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="d-flex">
                              <div className="me-2">
                                <img
                                  src={Photo}
                                  alt="Profile"
                                  className="rounded-circle"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    objectFit: "cover",
                                    border: "2px solid #4ED7F1",
                                  }}
                                />
                              </div>
                              <div>
                                <div className="fw-bold">{post.author}</div>
                                <div className="text-secondary small">
                                  {post.date}
                                </div>
                              </div>
                            </div>
                            <div
                              className="position-absolute"
                              style={{ right: "10px", top: "10px" }}
                            >
                              <ThreeDots />
                            </div>
                          </div>
                          <p
                            className="small mb-2"
                            style={{ fontSize: "12px" }}
                          >
                            {post.content}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            {renderReactionIcons(post.reactions)}
                            <div
                              className="text-secondary small"
                              style={{ fontSize: "11px" }}
                            >
                              {post.comments} comments · {post.shares} shares
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Posts;
