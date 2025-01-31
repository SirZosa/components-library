import React, { useEffect, useState } from 'react';
import './Popup.css'; // Add CSS for sliding animation

interface PopupProps {
  children: React.ReactNode; // Accepts any valid React children
  isOpen: boolean; // Controls whether the popup is visible
  onClose: () => void; // Callback to close the popup
}

const Popup: React.FC<PopupProps> = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Trigger the slide-in animation when the popup opens
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Delay hiding the popup to allow the slide-out animation to complete
      const timeout = setTimeout(() => setIsVisible(false), 300); // Match the duration of the slide-out animation
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`popup-container ${isOpen ? 'slide-in' : 'slide-out'}`}>
      <div className="popup-content">
        {children}
        <button onClick={onClose} className="popup-close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;