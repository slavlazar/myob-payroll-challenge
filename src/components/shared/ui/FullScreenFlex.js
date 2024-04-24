import styled from 'styled-components';

const FullScreenFlex = styled.main`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => {
    switch (props.background) {
      case 'primary':
        return props.theme.colour.primary;
      default:
        return 'transparent';
    }
  }};
`;

export default FullScreenFlex;
