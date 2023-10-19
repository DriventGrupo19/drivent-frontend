import styled from 'styled-components';

export const Title = ({ title }) => {
  return (
    <StyledText>
      {title}
    </StyledText>
  );
};

const StyledText = styled.h4`
  margin-bottom: 20px;
`;


