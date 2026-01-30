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

const Text = styled.p`
  color: #374151;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  background: ${({ variant }) =>
    variant === "danger" ? "#ef4444" : "#e5e7eb"};
  color: ${({ variant }) =>
    variant === "danger" ? "#ffffff" : "#111827"};

  &:hover {
    opacity: 0.9;
  }
`;

export default function ModalConfirm({
  open,
  title = "Confirmation",
  message,
  onConfirm,
  onClose,
}) {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Text>{message}</Text>

        <Actions>
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </Actions>
      </ModalBox>
    </Overlay>
  );
}
