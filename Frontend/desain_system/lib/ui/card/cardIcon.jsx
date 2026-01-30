import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background: #ffffff;
  width: 200px;
`;

const Icon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Title = styled.h4`
  margin-bottom: 6px;
`;

const Text = styled.p`
  font-size: 13px;
  color: #6b7280;
`;

export default function CardIcon({ icon, title, text }) {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Card>
  );
}
