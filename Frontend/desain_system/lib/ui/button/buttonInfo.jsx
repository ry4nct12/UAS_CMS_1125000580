import styled from "styled-components";

const InfoButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #06b6d4; /* cyan / info */
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0891b2;
  }
`;

export default function ButtonInfo({ children, ...props }) {
  return <InfoButton {...props}>{children}</InfoButton>;
}
