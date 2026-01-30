import styled from "styled-components";

const SecondaryButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #6b7280; /* gray */
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4b5563;
  }
`;

export default function ButtonSecondary({ children, ...props }) {
  return <SecondaryButton {...props}>{children}</SecondaryButton>;
}
