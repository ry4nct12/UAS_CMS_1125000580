"use client";
import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const Avatar = styled.div`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => $size / 2.5}px;
  font-weight: 600;
  color: #6b7280;
  overflow: hidden;

  ${({ $loading }) =>
    $loading &&
    css`
      animation: ${pulse} 1.5s infinite;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function PlaceholderAvatar({
  size = 48,
  name,
  src,
  loading = false,
}) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : null;

  return (
    <Avatar $size={size} $loading={loading}>
      {src && !loading ? (
        <Image
          src={src}
          alt={name || "avatar"}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        initials || "👤"
      )}
    </Avatar>
  );
}
