"use client";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 200px;
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

const Icon = styled.span`
  font-size: 16px;
`;

const Label = styled.span`
  flex: 1;
  text-align: left;
`;

const Menu = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #1e3a8a;
  font-weight: 500;

  &:hover {
    background: #f1f5f9;
  }
`;

export default function DropdownIcon({ label, icon = "⚙️", items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpen(!open)}>
        <Icon>{icon}</Icon>
        <Label>{label}</Label>
      </Button>

      {open && (
        <Menu>
          {items.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
}
