import styled from 'styled-components';

const Spinner = styled.div`
  position: ${props => (props.centered ? 'absolute' : 'relative')};
  top: ${props => (props.centered ? '50%' : '0')};
  left: ${props => (props.centered ? '50%' : '0')};
  z-index: 2;

  ${({ centered, size }) => {
    switch (size) {
      case 'small':
        return `
          width: 80px;
          margin-left: ${centered ? '-40px' : '0'};
          margin-top: ${centered ? '-40px' : '0'};
        `;
      case 'large':
        return `
          width: 200px;
          margin-left: ${centered ? '-100px' : '0'};
          margin-top: ${centered ? '-100px' : '0'};
        `;
      default:
        return `
          width: 140px;
          margin-left: ${centered ? '-70px' : '0'};
          margin-top: ${centered ? '-70px' : '0'};
        `;
    }
  }}
`;

export default Spinner;
