import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 20px;
  background: #ffffff;
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

export default function CardBasic({ title, description }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
}
