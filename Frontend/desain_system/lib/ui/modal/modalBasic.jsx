"use client";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  width: 360px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const Content = styled.div`
  margin-bottom: 20px;
  color: #374151;
`;

const CloseButton = styled.button`
  background: #0ea5e9;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ModalBasic({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>

        <Content>{children}</Content>

        <CloseButton onClick={onClose}>
          Close
        </CloseButton>
      </ModalBox>
    </Overlay>
  );
}
