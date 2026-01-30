"use client";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  width: 240px;
`;

const ImageSkeleton = styled.div`
  height: 120px;
  background: #e5e7eb;
  border-radius: 6px;
  margin-bottom: 12px;
  animation: ${pulse} 1.5s infinite;
`;

const Line = styled.div`
  height: ${({ h }) => h || "12px"};
  width: ${({ w }) => w || "100%"};
  background: #e5e7eb;
  margin-bottom: ${({ mb }) => mb || 0};
`;

export default function PlaceholderCard() {
  return (
    <Card>
      <ImageSkeleton />
      <Line h="14px" w="70%" mb="8px" />
      <Line h="12px" w="90%" />
    </Card>
  );
}
