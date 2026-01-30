import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  width: 240px;
  background: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h4`
  margin-bottom: 6px;
`;

const Location = styled.p`
  font-size: 13px;
  color: #6b7280;
`;

export default function CardImage({ image, title, location }) {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Location>{location}</Location>
      </Content>
    </Card>
  );
}
