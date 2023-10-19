import styled from 'styled-components';

export const SubTitle = ({ title }) => {
  return (
    <StyledSubText>
      {title}
    </StyledSubText>
  );
};

const StyledSubText = styled.p`
  margin-top: 35px;
  text-align: left;
  color: #8E8E8E;
  margin-bottom: 5px;
  & span {
    font-weight: 600;
  }
`;


