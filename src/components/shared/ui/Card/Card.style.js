import styled from 'styled-components';

import { media } from '../../../../utils/style-utils';

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 2rem;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;

  ${({ loading }) =>
    loading &&
    `
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.6);
      z-index: 1;
    }
  `}

  ${media.tablet`padding: 2.4rem;`}
`;

export default Card;
