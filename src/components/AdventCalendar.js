import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Day from "./Day";
import adventContent from "../data/adventContent";
import { CAMPAIGN_YEAR } from "../config";
import "../styles/Modal.css";

const STORAGE_KEY = `advent-opened-${CAMPAIGN_YEAR}`;

export const getAvailableDay = (now = new Date()) => {
  const previewParam = new URLSearchParams(window.location.search).get(
    "previewDay"
  );
  if (previewParam) {
    const preview = Number(previewParam);
    if (
      Number.isInteger(preview) && preview >= 0 && preview <= 25
    ) {
      return preview;
    } 
  }

  const year = now.getFullYear();
  if (year < CAMPAIGN_YEAR || (year === CAMPAIGN_YEAR && now.getMonth() < 11)) {
    return 0;
  }
  return year === CAMPAIGN_YEAR ? Math.min(now.getDate(), 25) : 25;
};

const loadOpenedDoors = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
};

const DOOR_DAYS = Array.from({ length: 24 }, (_, i) => i + 1);

const AdventCalendar = () => {
  const [currentDate] = useState(getAvailableDay);
  const [openedDoors, setOpenedDoors] = useState(loadOpenedDoors);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDoorClick = (day) => {
    if (day > currentDate) {
      setModalContent({
        title: "This window is still dark",
        content: `Come back on ${day} December to bring this light.`,
      });
    } else {
      if (!openedDoors.includes(day)) {
        const updated = [...openedDoors, day];
        setOpenedDoors(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {
          /* storage unavailable (e.g. private mode), carry on */
        }
      }
      setModalContent(adventContent.find((item) => item.date === day));
    }
    setShowModal(true);
  };

  // Keep modalContent so the text doesn't vanish during the fade-out
  const closeModal = () => setShowModal(false);

  const renderDay = (day) => (
    <Day
      key={day}
      day={day}
      isOpened={openedDoors.includes(day)}
      onClick={() => handleDoorClick(day)}
      content={adventContent[day - 1]}
      isLocked={currentDate < day}
      isToday={currentDate === day}
    />
  );

  return (
    <div className="container my-4">
      <div className="advent-card-grid">
        {DOOR_DAYS.map(renderDay)}
        <div className="day-25-wrapper">{renderDay(25)}</div>
      </div>

      <Modal
        show={showModal}
        onHide={closeModal}
        aria-labelledby="advent-modal-title"
        scrollable
        centered
        size="lg"
        dialogClassName="svp-modal-dialog"
        contentClassName="svp-modal-content"
        backdropClassName="svp-modal-backdrop"
      >
        <Modal.Header closeButton className="svp-modal-header">
          <Modal.Title id="advent-modal-title" className="svp-modal-title">
            {modalContent?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="svp-modal-body">
          {modalContent && (
            <>
              {modalContent.mediaUrl && (
                <a
                  className="svp-modal-image-link"
                  href={modalContent.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalContent.mediaUrl}
                    alt={modalContent.imageAlt || modalContent.title}
                    className="svp-modal-image"
                  />
                </a>
              )}

              <div className="modal-content-text">
                {modalContent.content
                  .split("\n")
                  .filter(Boolean)
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
              </div>

              {modalContent.linkUrl && (
                <div className="text-center">
                  <a
                    href={modalContent.linkUrl.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary svp-modal-link-button fw-bold"
                  >
                    {modalContent.linkText || "Find Out More"}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="svp-modal-footer d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={closeModal}
            className="svp-modal-button fw-bold text-uppercase"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdventCalendar;