"use client";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ImageWrapper = styled.div`
  max-width: 90vw;
  max-height: 80vh;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

export default function ModalImage({ open, image, onClose }) {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ImageWrapper onClick={(e) => e.stopPropagation()}>
        <Image src={image} alt="Preview" />
      </ImageWrapper>
    </Overlay>
  );
}
