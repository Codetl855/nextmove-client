import React, { useEffect, useState, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  width?: string;
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  width = "max-w-lg",
}: ModalProps) {
  // For smooth fade-out animation before unmount
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      // Wait for the CSS transition to finish before unmounting
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
        ${isOpen ? "visible" : "invisible"}
      `}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className={`relative z-10 w-full ${width} mx-4 bg-white rounded-lg shadow-lg
          transform transition-all duration-300
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
        `}
      >
        {/* Header */}
        {
          <div className="flex justify-between items-center md:border-gray-100 md:border-b px-4 py-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        }

        {/* Body */}
        <div className="p-4">{children}</div>

        {/* Footer */}
        {<div className="px-4 py-3">{footer}</div>}
      </div>
    </div>
  );
}
