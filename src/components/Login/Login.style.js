import styled, { keyframes } from 'styled-components';

import { media } from '../../utils/style-utils';

const animated = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

export const LogoContainer = styled.div`
  width: 10rem;
`;

export const CardContainer = styled.div`
  width: 35rem;
  animation-name: ${animated};
  animation-fill-mode: both;
  animation-duration: 600ms;

  ${media.tablet`width: 60rem`};
  ${media.desktop`width: 70rem`};
`;
