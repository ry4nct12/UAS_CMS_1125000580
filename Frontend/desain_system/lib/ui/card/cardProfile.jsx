import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  width: 220px;
  text-align: center;
  background: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

const Name = styled.h4`
  margin-bottom: 4px;
`;

const Role = styled.p`
  font-size: 13px;
  color: #6b7280;
`;

export default function CardProfile({ avatar, name, role }) {
  return (
    <Card>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Card>
  );
}
