import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  width: 260px;
  background: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const FeatureList = styled.ul`
  padding-left: 18px;
  font-size: 14px;
  color: #6b7280;
`;

const FeatureItem = styled.li`
  margin-bottom: 6px;
`;

export default function CardPrice({ title, price, features }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Price>Rp {price}</Price>

      <FeatureList>
        {features.map((f, i) => (
          <FeatureItem key={i}>{f}</FeatureItem>
        ))}
      </FeatureList>
    </Card>
  );
}
