import styled from 'styled-components';

const LinearLine = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${props => props.theme.colour.primary};
  background-image: ${props =>
    `linear-gradient(135%, ${props.theme.colour.primary} 35%, ${
      props.theme.colour.secondary
    } 100%)`};
`;

export default LinearLine;
