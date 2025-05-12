import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import axios from "axios";

function Settings() {
  const [notifications, setNotifications] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // Fetch notifications from JSON server
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3000/notifications");
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  // Delete notification
  const deleteNotification = async (idToDelete) => {
    try {
      await axios.delete(`http://localhost:3000/notifications/${idToDelete}`);
      setNotifications(
        notifications.filter((notification) => notification.id !== idToDelete)
      );
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#4ED7F1" : "#EFF1F5",
    fontWeight: "bold",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <div className="container-fluid py-5">
      <div className="d-flex align-items-center mb-4">
        <h2 className="text-black fw-bold mx-auto">
          All Notifications
          <span
            className="badge text-black ms-2 fs-5"
            style={{ backgroundColor: "#4ED7F1" }}
          >
            {notifications.length}
          </span>
        </h2>
      </div>

      <div className="row">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              id={notification.id}
              title={notification.title}
              content={notification.message}
              date={notification.date}
              onDelete={deleteNotification}
            />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="fs-5 text-muted">No notifications to display</p>
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-lg"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Load More
            <ChevronDown className="ms-2" size={25} />
          </button>
        </div>
      )}
    </div>
  );
}

function NotificationCard({ id, title, content, date, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="col-12 mb-5">
      <div
        className="card shadow-sm rounded-3"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="card-body position-relative">
          <h3 className="card-title fw-bold me-5">{title}</h3>
          <p className="card-text fs-5 fw-light">{content}</p>
          <span className="position-absolute bottom-0 end-0 me-3 mb-2 fw-bold">
            {date}
          </span>
          <X
            className="position-absolute top-0 end-0 me-3 mt-2 cursor-pointer text-danger fw-bolder"
            size={24}
            strokeWidth={1.5}
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
