import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export default function ButtonPrimary({ children, ...props }) {
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
}
