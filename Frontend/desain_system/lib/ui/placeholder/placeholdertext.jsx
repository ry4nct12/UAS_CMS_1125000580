"use client";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const Wrapper = styled.div`
  width: 220px;       /* ⬅️ PENTING */
  flex-shrink: 0;     /* ⬅️ biar aman di flex */
`;

const Line = styled.div`
  height: 12px;
  width: ${({ width }) => width}%;
  background: #e5e7eb;
  border-radius: 4px;
  margin-bottom: 8px;
  animation: ${pulse} 1.5s infinite;
`;

export default function PlaceholderText({ lines = 3 }) {
  return (
    <Wrapper>
      {Array.from({ length: lines }).map((_, i) => (
        <Line key={i} width={100 - i * 10} />
      ))}
    </Wrapper>
  );
}
