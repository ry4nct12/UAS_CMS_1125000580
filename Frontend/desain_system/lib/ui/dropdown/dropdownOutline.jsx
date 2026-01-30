"use client";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 200px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  background: #facc15;
  border: none;
  border-radius: 6px;
  color: #1f2933;
  cursor: pointer;
  font-weight: 500;
  text-align: left;

  &:hover {
    background: #fde047;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  background: #fef9c3;
  border-radius: 6px;
  border: 1px solid #eab308;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #92400e;
  font-weight: 600;

  &:hover {
    background: #fef08a;
  }
`;

export default function DropdownOutline({ label, items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpen(!open)}>
        {label}
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
