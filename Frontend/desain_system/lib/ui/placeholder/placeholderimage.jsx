"use client";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const ImageSkeleton = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: #e5e7eb;
  border-radius: 6px;
  animation: ${pulse} 1.5s infinite;
`;

export default function PlaceholderImage({
  width = 200,
  height = 120,
}) {
  return <ImageSkeleton width={width} height={height} />;
}
