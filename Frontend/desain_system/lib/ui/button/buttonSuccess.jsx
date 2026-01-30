import styled from "styled-components";

const SuccessButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #16a34a; /* green */
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #15803d;
  }
`;

export default function ButtonSuccess({ children, ...props }) {
  return <SuccessButton {...props}>{children}</SuccessButton>;
}
