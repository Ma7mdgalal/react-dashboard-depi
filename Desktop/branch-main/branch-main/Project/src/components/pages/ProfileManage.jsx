import { useState} from "react";
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

import myPic from "@images/myPhoto.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileManage = () => {
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

  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Handler functions
  const handleAddAccount = () => {
    if (selectedAccount) {
      setSocialAccounts(
        socialAccounts.map((acc) =>
          acc.name === selectedAccount ? { ...acc, connected: true } : acc
        )
      );
      toast.success(`${selectedAccount} connected!`);
      setShowAddModal(false);
      setSelectedAccount(null);
    }
  };
  const handleRemoveAccount = () => {
    if (selectedAccount) {
      setSocialAccounts(
        socialAccounts.map((acc) =>
          acc.name === selectedAccount ? { ...acc, connected: false } : acc
        )
      );
      toast.info(`${selectedAccount} disconnected.`);
      setShowRemoveModal(false);
      setSelectedAccount(null);
    }
  };
  const handleDeleteAccount = () => {
    toast.error("Account deletion disabled.");
    setShowDeleteModal(false);
  };

  const profilePicSize = "10rem";
  const socialIconContainerSize = "6rem";
  const socialIconFaSize = "3rem";

  return (
    <Container
      fluid
      className="d-flex flex-column px-2 px-sm-3 pt-4"
      style={{
        height: `calc(100vh - 150px)`,
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <Row className="g-2 g-lg-4 flex-grow-1 d-flex">
        <Col xs={12} md={4} className="d-flex flex-column mb-3 mb-md-0">
          <Card
            className="shadow-sm rounded-4 h-100"
            style={{
              background: "#A8F1FF",
              backgroundImage:
                "linear-gradient(to bottom, #D4F6FF 50%, white 50%)",
            }}
          >
            <Card.Body className="text-center p-2 p-lg-4 d-flex flex-column justify-content-center">
              <div className="py-2 py-lg-3">
                <img
                  src={userProfile.profilePic}
                  alt="Profile"
                  className="rounded-circle img-thumbnail mx-auto"
                  style={{
                    // Desktop-first size
                    width: profilePicSize,
                    height: profilePicSize,
                    objectFit: "cover",
                    border: "3px solid #4ED7F1",
                  }}
                />
                <h3 className="mb-2 pt-2 pt-lg-3 fs-2 fs-lg-3">
                  {userProfile.displayName}
                </h3>
                <div className="mt-2 mt-lg-3">
                  <h4
                    className="fw-bold fs-7 fs-lg-4"
                    style={{ color: "#4ED7F1" }}
                  >
                    {userProfile.followers}
                    <span className="text-dark fw-medium fs-7 fs-lg-5">
                      &nbsp; Follower
                    </span>
                  </h4>
                </div>
                <div>
                  <h4
                    className="fw-bold fs-7 fs-lg-4"
                    style={{ color: "#4ED7F1" }}
                  >
                    {userProfile.following}
                    <span className="text-dark fw-medium fs-7 fs-lg-5">
                      &nbsp;Following
                    </span>
                  </h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={8} className="d-flex flex-column">
          <Card
            className="shadow-sm rounded-4 h-100 d-flex flex-column"
            style={{ backgroundColor: "#EFF1F5" }}
          >
            <Card.Body className="p-2 p-lg-4 d-flex flex-column flex-grow-1">
              <div className="mb-3 mb-lg-4">
                {/* Responsive margin */}
                <div className="mb-2">
                  <h5 className="fs-5 fs-lg-5">
                    <strong>Name: </strong>
                    {userProfile.fullName}
                  </h5>
                </div>
                <div className="mb-2">
                  <h5 className="fs-5 fs-lg-5">
                    <strong>Email: </strong>
                    {userProfile.email}
                  </h5>
                </div>
                <div>
                  <h5 className="fs-5 fs-lg-5">
                    <strong>Phone: </strong>
                    {userProfile.phone}
                  </h5>
                </div>
              </div>

              <div
                className="border rounded-4 p-2 p-lg-3 shadow-sm flex-grow-1 d-flex flex-column"
                style={{ backgroundColor: "#FAFAFA" }}
              >
                <h5 className="mb-3 fw-bold fs-5 fs-lg-1">Linked accounts</h5>

                <div className="d-flex flex-wrap gap-2 gap-lg-4 justify-content-center align-items-center mb-3 mb-lg-4 flex-grow-1">
                  {socialAccounts.map((account) => (
                    <div
                      key={account.name}
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        account.connected ? "" : "opacity-50"
                      }`}
                      style={{
                        width: socialIconContainerSize,
                        height: socialIconContainerSize,
                        backgroundColor: "#f8f9fa",
                        border: account.connected
                          ? `2px solid ${account.color}`
                          : "2px solid #dee2e6",
                        transition: "transform 0.2s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <FontAwesomeIcon
                        icon={account.icon}
                        style={{
                          // Desktop-first size for icon
                          color: account.color,
                          fontSize: socialIconFaSize,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Action Buttons - mt-auto to push to bottom */}
                <div className="d-flex flex-column flex-md-row gap-2 gap-lg-3 justify-content-center mt-auto pt-2 pt-lg-3">
                  <Button
                    variant="dark"
                    className="px-2 py-1 px-lg-3 py-lg-2 rounded-pill w-100 w-md-auto fs-7 fs-lg-6" // Responsive text/padding
                    onClick={() => setShowAddModal(true)}
                  >
                    Add
                  </Button>
                  <Button
                    variant="dark"
                    className="px-2 py-1 px-lg-3 py-lg-2 rounded-pill w-100 w-md-auto fs-7 fs-lg-6"
                    onClick={() => setShowRemoveModal(true)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="danger"
                    className="px-2 py-1 px-lg-3 py-lg-2 rounded-pill w-100 w-md-auto fs-7 fs-lg-6"
                    onClick={() => handleDeleteAccount()}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6 fs-lg-5">
            Connect Social Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className="fs-7 fs-lg-6">
              Select Account to Connect
            </Form.Label>
            <Form.Select
              className="fs-7 fs-lg-6"
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
            onClick={() => setShowAddModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
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
          <Modal.Title className="fs-6 fs-lg-5">
            Disconnect Social Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label className="fs-7 fs-lg-6">
              Select Account to Disconnect
            </Form.Label>
            <Form.Select
              className="fs-7 fs-lg-6"
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
            onClick={() => setShowRemoveModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
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
          <Modal.Title className="fs-6 fs-lg-5">Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold fs-7 fs-lg-6">
            Warning: This action cannot be undone.
          </p>
          <p className="fs-7 fs-lg-6">
            Are you sure you want to permanently delete your account? All your
            data will be lost.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            className="fs-7 fs-lg-6 px-2 py-1 px-lg-3 py-lg-2"
            onClick={handleDeleteAccount}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfileManage;
