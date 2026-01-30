"use client";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const ButtonSkeleton = styled.div`
  height: 36px;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width};
  border-radius: 6px;
  background: #e5e7eb;
  animation: ${pulse} 1.5s infinite;
`;

export default function PlaceholderButton({ width = 100 }) {
  return <ButtonSkeleton width={width} />;
}
