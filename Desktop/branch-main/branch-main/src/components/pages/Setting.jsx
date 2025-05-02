import React, { useState } from "react";
// Import Lucide React icons
import { X, ChevronDown } from "lucide-react";

function Settings() {
  // Initial notification data
  const initialNotifications = [
    {
      id: 1,
      title: "Instagram Followers reaches 100k 🤩🔥",
      content:
        "Congratulations! 🎉 You've just hit 100,000 followers on Instagram! 🚀✨ Your community is growing, and your impact is stronger than ever. Keep sharing your amazing content! 💙 #100KStrong",
      date: "12 Feb",
    },
    {
      id: 2,
      title: "YouTube subscription rate has increased by 20%",
      content:
        "Your YouTube channel's subscription rate has increased by 20% in the last month! 🎉 More viewers are loving your content—keep up the great work and keep them engaged! 💡🔥",
      date: "27 Jun",
    },
    {
      id: 3,
      title: "Your Post is on Fire! 🔥",
      content:
        "Your latest post just hit 2,000 likes on Facebook! 🎉👏 Your audience is loving it—keep sharing amazing content and engaging with your community! 💙",
      date: "2 Jun",
    },
  ];

  // State to manage the notifications
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to delete a notification by its id
  const deleteNotification = (idToDelete) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== idToDelete)
    );
  };

  return (
    <div className="container  py-5">
      {/* Header Section */}
      <div className="d-flex align-items-center mb-4">
        <h2 className="text-warning fw-bold mx-auto">
          All Notifications
          <span className="badge bg-warning text-dark ms-2 fs-5">
            {notifications.length}
          </span>
        </h2>
      </div>

      {/* Notification Cards */}
      <div className="row">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              id={notification.id}
              title={notification.title}
              content={notification.content}
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

      {/* Load More Button - only show if there are notifications */}
      {notifications.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark btn-lg">
            Load More
            <ChevronDown className="ms-2" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

// Reusable Notification Card Component with delete functionality
function NotificationCard({ id, title, content, date, onDelete }) {
  // Handler for the delete button click
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="col-12 mb-5">
      <div
        className="card shadow-sm rounded-3"
        style={{ backgroundColor: "#bebebe" }}
      >
        <div className="card-body position-relative">
          <h3 className="card-title fw-bold me-5">{title}</h3>
          <p className="card-text fs-5 fw-light">{content}</p>
          <span className="position-absolute bottom-0 end-0 me-3 mb-2 fw-bold">
            {date}
          </span>
          <X
            className="position-absolute top-0 end-0 me-3 mt-2 cursor-pointer"
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
