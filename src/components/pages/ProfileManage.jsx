import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import myPic from "./myPhoto.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileManage = () => {
  // State management
  const [socialAccounts, setSocialAccounts] = useState([
    { name: "Facebook", icon: faFacebook, color: "#4267B2", connected: true },
    { name: "Instagram", icon: faInstagram, color: "#E1306C", connected: true },
    { name: "Twitter", icon: faTwitter, color: "#1DA1F2", connected: true },
    { name: "LinkedIn", icon: faLinkedin, color: "#0077B5", connected: true },
    { name: "TikTok", icon: faTiktok, color: "#000000", connected: false },
    { name: "YouTube", icon: faYoutube, color: "#FF0000", connected: false },
  ]);

  const [userProfile, setUserProfile] = useState({
    fullName: "Omar Khaled Hassan",
    displayName: "Omar Hassan",
    email: "omarkh123@gmail.com",
    phone: "+201115678902",
    followers: 540,
    following: 320,
    profilePic: myPic,
  });

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Handler functions
  const handleAddAccount = () => {
    if (selectedAccount) {
      setSocialAccounts(
        socialAccounts.map((account) =>
          account.name === selectedAccount
            ? { ...account, connected: true }
            : account
        )
      );
      toast.success(`${selectedAccount} account connected successfully!`);
      setShowAddModal(false);
      setSelectedAccount(null);
    }
  };

  const handleRemoveAccount = () => {
    if (selectedAccount) {
      setSocialAccounts(
        socialAccounts.map((account) =>
          account.name === selectedAccount
            ? { ...account, connected: false }
            : account
        )
      );
      toast.info(`${selectedAccount} account disconnected`);
      setShowRemoveModal(false);
      setSelectedAccount(null);
    }
  };

  const handleDeleteAccount = () => {
    // In a real app, this would involve API calls to delete the actual account
    toast.error("Account deletion is disabled in this demo");
    setShowDeleteModal(false);
  };

  // Component for profile stats (followers/following)
  const ProfileStat = ({ value, label }) => (
    <div>
      <h2 className="text-warning fw-bold">
        {value} <span className="text-dark fs-4 fw-medium">{label}</span>
      </h2>
    </div>
  );

  // Component for user information items
  const ProfileInfoItem = ({ label, value }) => (
    <div className="mb-2 mb-md-3">
      <h5 className="fs-5 fs-md-5">
        <strong>{label}: </strong>
        {value}
      </h5>
    </div>
  );

  // Component for social media icons
  const SocialIcon = ({ account }) => (
    <div
      className={`social-icon rounded-circle d-flex align-items-center justify-content-center ${
        account.connected ? "" : "opacity-50"
      }`}
      style={{
        width: "6rem",
        height: "6rem",
        backgroundColor: "#f8f9fa",
        border: account.connected ? `2px solid ${account.color}` : "none",
      }}
    >
      <FontAwesomeIcon
        icon={account.icon}
        style={{
          color: account.color,
          fontSize: "clamp(3.25rem, 2vw, 1.75rem)",
        }}
      />
    </div>
  );

  // Action button component
  const ActionButton = ({ variant, text, onClick }) => (
    <Button
      variant={variant}
      className="px-3 py-2 rounded-pill flex-grow-0 mx-1"
      style={{ minWidth: "100px" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );

  return (
    <Container fluid className="dashboard-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="main-content py-5">
        <div className="content-body p-3 p-md-4">
          <Row className="g-3 g-md-4">
            {/* Profile Card - Left Side */}
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <Card
                className="border-0 shadow-sm rounded-4 h-100"
                style={{
                  background:
                    "linear-gradient(to bottom,rgba(255, 187, 0, 0.19) 50%, rgb(255, 255, 255) 65%)",
                }}
              >
                <Card.Body className="text-center p-3 p-md-4">
                  <div className="mb-3 py-5">
                    <img
                      src={userProfile.profilePic}
                      alt="Profile"
                      className="rounded-circle img-thumbnail border-4 border-warning"
                      style={{
                        width: "11rem",
                        height: "11rem",
                        objectFit: "cover",
                      }}
                    />
                    <h3 className="mb-3 mb-md-4 pt-5">
                      {userProfile.displayName}
                    </h3>
                    <ProfileStat
                      value={userProfile.followers}
                      label="Follower"
                    />
                    <ProfileStat
                      value={userProfile.following}
                      label="Following"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* User Info & Social Media - Right Side */}
            <Col xs={12} md={8}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <Card.Body className="p-3 p-md-4">
                  {/* User Information */}
                  <div className="mb-4 mb-md-5">
                    <ProfileInfoItem
                      label="Name"
                      value={userProfile.fullName}
                    />
                    <ProfileInfoItem label="Email" value={userProfile.email} />
                    <ProfileInfoItem label="Phone" value={userProfile.phone} />
                  </div>

                  {/* Social Media Section */}
                  <div className="border rounded-4 p-3 shadow-sm">
                    <h5 className="mb-3 mb-md-4 fw-bold fs-3">
                      Linked accounts
                    </h5>
                    <div className="d-flex flex-wrap gap-2 gap-md-4 justify-content-center mb-4 mb-md-5">
                      {socialAccounts.map((account, index) => (
                        <SocialIcon key={index} account={account} />
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-md-row gap-2 gap-md-4 justify-content-center mt-4 mt-md-5 py-3">
                      <ActionButton
                        variant="dark"
                        text="Add"
                        onClick={() => setShowAddModal(true)}
                      />
                      <ActionButton
                        variant="dark"
                        text="Remove"
                        onClick={() => setShowRemoveModal(true)}
                      />
                      <ActionButton
                        variant="danger"
                        text="Delete"
                        onClick={() => setShowDeleteModal(true)}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Add Account Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Social Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Select Account to Connect</Form.Label>
              <Form.Select
                onChange={(e) => setSelectedAccount(e.target.value)}
                value={selectedAccount || ""}
              >
                <option value="">Select an account</option>
                {socialAccounts
                  .filter((account) => !account.connected)
                  .map((account, idx) => (
                    <option key={idx} value={account.name}>
                      {account.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleAddAccount}
            disabled={
              !selectedAccount ||
              socialAccounts.find((a) => a.name === selectedAccount)?.connected
            }
          >
            Connect
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Remove Account Modal */}
      <Modal
        show={showRemoveModal}
        onHide={() => setShowRemoveModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Disconnect Social Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Select Account to Disconnect</Form.Label>
              <Form.Select
                onChange={(e) => setSelectedAccount(e.target.value)}
                value={selectedAccount || ""}
              >
                <option value="">Select an account</option>
                {socialAccounts
                  .filter((account) => account.connected)
                  .map((account, idx) => (
                    <option key={idx} value={account.name}>
                      {account.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRemoveModal(false)}>
            Cancel
          </Button>
          <Button
            variant="warning"
            onClick={handleRemoveAccount}
            disabled={
              !selectedAccount ||
              !socialAccounts.find((a) => a.name === selectedAccount)?.connected
            }
          >
            Disconnect
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Account Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">Warning: This action cannot be undone.</p>
          <p>
            Are you sure you want to permanently delete your account? All your
            data will be lost.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteAccount}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfileManage;
