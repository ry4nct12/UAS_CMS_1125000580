"use client";
import styled from "styled-components";

const Fullscreen = styled.div`
  position: fixed;
  inset: 0;
  background: #ffffff;
  padding: 40px;
  z-index: 999;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #111827;

  &:hover {
    opacity: 0.7;
  }
`;

export default function ModalFullscreen({ open, onClose, children }) {
  if (!open) return null;

  return (
    <Fullscreen>
      <CloseButton onClick={onClose}>
        ✕
      </CloseButton>

      {children}
    </Fullscreen>
  );
}
