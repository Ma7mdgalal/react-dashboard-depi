"use client";
import Photo from "@images/myPhoto.png";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Card, Form, InputGroup } from "react-bootstrap";
import { ThreeDots, Send } from "react-bootstrap-icons";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";

function Posts() {
  // --- State for fetched data ---
  const [audienceCountries, setAudienceCountries] = useState([]);
  const [audienceAges, setAudienceAges] = useState([]);
  const [audienceActivity, setAudienceActivity] = useState([]);
  const [topPosts, setTopPosts] = useState([]);

  // --- Static State ---
  const [dropdownItems] = useState([
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
  ]);

  const [reactionIcons] = useState([
    { id: 1, emoji: "👍", color: "#1877F2" },
    { id: 2, emoji: "❤️", color: "#E41E3F" },
    { id: 3, emoji: "😄", color: "#F7B928" },
  ]);

  // --- Chatbot State ---
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

  useEffect(() => {
    // --- Fetch Audience Insights ---
    Promise.all([
      axios.get("http://localhost:3000/audienceCountries"),
      axios.get("http://localhost:3000/audienceAges"),
      axios.get("http://localhost:3000/audienceActivity"),
    ])
      .then(([countriesRes, agesRes, activityRes]) => {
        setAudienceCountries(countriesRes.data);
        setAudienceAges(agesRes.data);
        setAudienceActivity(activityRes.data);
      })
      .catch((err) => console.error("Error fetching audience insights:", err));

    // --- Fetch Top Posts ---
    const fetchTopPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/topPosts");
        // Directly set state (potential risk if component unmounts quickly)
        setTopPosts(response.data);
      } catch (err) {
        console.error("Error fetching top posts:", err);
      }
    };
    fetchTopPosts();
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- Event Handlers ---
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      const newUserMessage = { sender: "user", message: chatInput };
      setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setChatInput("");
    }
  };

  // --- Reusable Render Functions ---
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

  const renderReactionIcons = (likesCount) => (
    <div>
      {reactionIcons.map((icon) => (
        <span
          key={icon.id}
          className="me-1 rounded-circle d-inline-block"
          style={{ width: "18px", height: "18px", backgroundColor: icon.color }}
        >
          <span
            className="text-white d-flex justify-content-center align-items-center"
            style={{ fontSize: "10px", height: "100%" }}
          >
            {icon.emoji}
          </span>
        </span>
      ))}
      <span className="text-secondary small ms-1">{likesCount || 0}</span>
    </div>
  );

  // --- Main Component Return ---
  return (
    <div className="">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Main Content Area */}
          {/* Ensure column classes are correct for layout */}
          <div className="col-md-6 col-lg-8 col-xl-9 p-4">
            {/* Audience Insights */}
            <Card
              className="shadow rounded-4 mb-4"
              style={{ border: "none", backgroundColor: "#FAFAFA" }}
            >
              <Card.Body className="p-4">
                <h5 className="mb-4 fw-bold fs-4">Audience Insights</h5>
                <div className="row g-4">
                  {[
                    {
                      title: "Top countries",
                      data: audienceCountries,
                      keyName: "name",
                    },
                    { title: "Age", data: audienceAges, keyName: "range" },
                    {
                      title: "Peak Activity times",
                      data: audienceActivity,
                      keyName: "time",
                    },
                  ].map((card) => (
                    <div key={card.title} className="col-md-4">
                      <Card
                        className="rounded-4 h-100"
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <Card.Body className="p-4 fs-5">
                          <h5 className="text-black fw-bold text-center mb-4">
                            {card.title}
                          </h5>
                          {card.data.length > 0 ? (
                            card.data.map((item, index) => (
                              <div
                                key={index}
                                className="d-flex justify-content-between mb-3"
                              >
                                <span className="fw-medium">
                                  {item[card.keyName]}
                                </span>
                                <span className="text-secondary">
                                  ({String(item.percentage || 0)}%)
                                </span>
                              </div>
                            ))
                          ) : (
                            <p className="text-center text-muted small">
                              No data available
                            </p>
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
                  style={{
                    backgroundColor: "#f0f0f0",
                    minHeight: "180px",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-3 ${
                        msg.sender === "user"
                          ? "d-flex justify-content-end"
                          : "d-flex justify-content-start"
                      }`}
                    >
                      <div
                        className={`d-inline-block p-3 rounded-3 fw-medium`}
                        style={{
                          maxWidth: "75%",
                          backgroundColor:
                            msg.sender === "user" ? "#A8F1FF" : "#FFFFFF",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                          wordWrap: "break-word",
                          color: msg.sender === "user" ? "#003C4D" : "#333",
                        }}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
                <Form onSubmit={handleChatSubmit} className="position-relative">
                  <InputGroup
                    className="rounded-pill overflow-hidden shadow-sm"
                    style={{
                      backgroundColor: "#FAFAFA",
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <Form.Control
                      placeholder="Ask anything..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="border-0 bg-transparent py-2 px-3"
                      style={{ boxShadow: "none", outline: "none" }}
                    />
                    <InputGroup.Text
                      as="button"
                      type="submit"
                      className="bg-transparent border-0 px-3"
                      style={{ cursor: "pointer" }}
                      disabled={!chatInput.trim()}
                    >
                      <span
                        style={{
                          color: chatInput.trim() ? "#4ED7F1" : "#BDBDBD",
                        }}
                      >
                        <Send size={25} />
                      </span>
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
          </div>

          {/* Top 3 Posts Sidebar */}
          <div className="col-md-6 col-lg-4 col-xl-3 d-flex py-5 px-4">
            <Card
              className="rounded-4 shadow border-0 d-flex flex-column w-100"
              style={{ backgroundColor: "#EFF1F5" }}
            >
              <Card.Body className="p-4 d-flex flex-column h-100">
                <div className="d-flex justify-content-between align-items-center mb-4 flex-shrink-0">
                  <h5 className="text-black fw-bold m-0 pe-2">Top 3 posts</h5>{" "}
                  {renderDropdown()}
                </div>

                <div className="flex-grow-1 overflow-auto">
                  {topPosts.length > 0 ? (
                    topPosts.map((post, index) => (
                      <div
                        key={post.id}
                        className={`${
                          index < topPosts.length - 1 ? "mb-4" : ""
                        }`}
                      >
                        <Card
                          className="border-0 rounded-4"
                          style={{ backgroundColor: "#F5F5F5" }}
                        >
                          <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div className="d-flex align-items-center">
                                <div className="me-2 flex-shrink-0">
                                  <img
                                    src={post.profilePic || Photo}
                                    alt={`${post.author || "User"} Profile`}
                                    className="rounded-circle"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                      border: "2px solid #4ED7F1",
                                      backgroundColor: "#E0E0E0",
                                    }}
                                    onError={(e) => {
                                      if (e.target.src !== Photo) {
                                        e.target.onerror = null;
                                        e.target.src = Photo;
                                      }
                                    }}
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="fw-bold small">
                                    {post.author}
                                  </div>
                                  <div className="text-secondary x-small">
                                    {post.date}
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{ cursor: "pointer" }}
                                className="text-secondary"
                              >
                                <ThreeDots />
                              </div>
                            </div>
                            <p
                              className="small mb-2"
                              style={{
                                fontSize: "13px",
                                lineHeight: "1.4",
                                wordBreak: "break-word",
                              }}
                            >
                              {post.content}
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-2">
                              {renderReactionIcons(post.engagement?.likes)}
                              <div
                                className="text-secondary small"
                                style={{ fontSize: "11px" }}
                              >
                                {post.engagement?.comments || 0} comments ·{" "}
                                {post.engagement?.shares || 0} shares
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-muted pt-5">
                      Loading posts...
                    </p>
                  )}
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
