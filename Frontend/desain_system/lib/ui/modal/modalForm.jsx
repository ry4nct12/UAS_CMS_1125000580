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
  width: 380px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 14px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #0ea5e9;
  }
`;

const SubmitButton = styled.button`
  background: #0ea5e9;
  color: #ffffff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ModalForm({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Title>Contact Admin</Title>

        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Textarea placeholder="Message" />

        <SubmitButton onClick={onSubmit}>
          Submit
        </SubmitButton>
      </ModalBox>
    </Overlay>
  );
}
