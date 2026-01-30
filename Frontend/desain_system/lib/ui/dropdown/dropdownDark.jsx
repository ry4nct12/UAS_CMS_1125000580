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
  background: #111827;
  color: #ffffff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: #1f2937;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 110%;
  width: 100%;
  background: #1f2933;
  border-radius: 6px;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #374151;
  }
`;

export default function DropdownDark({ label, items = [] }) {
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
