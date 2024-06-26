import styled from 'styled-components';

import { media } from '../../../utils/style-utils';

const Columns = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  ${media.tablet`display: flex;`};

  & > * {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
  }
`;

export default Columns;
