"use client";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

const MainButton = styled.button`
  padding: 8px 12px;
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px 0 0 6px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

const ArrowButton = styled.button`
  padding: 8px 12px;
  background: #1e40af;
  color: #ffffff;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;

  &:hover {
    background: #1e3a8a;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 200px;
  background: #eff6ff;
  border-radius: 6px;
  border: 1px solid #2563eb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  z-index: 10;
`;

const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #1e3a8a;
  font-weight: 500;

  &:hover {
    background: #dbeafe;
  }
`;

export default function DropdownSplit({ label, items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <MainButton>{label}</MainButton>
      <ArrowButton onClick={() => setOpen(!open)}>
        ▼
      </ArrowButton>

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
