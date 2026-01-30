'use client'
import styled from 'styled-components'

const DangerButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #dc2626;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b91c1c;
  }

  &:disabled {
    background-color: #fca5a5;
    cursor: not-allowed;
  }
`

export default function ButtonDanger({ children, ...props }) {
  return <DangerButton {...props}>{children}</DangerButton>
}
