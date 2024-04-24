import styled from 'styled-components';

import { Logo, Button as UIButton } from '../shared/ui';

const Wrapper = styled.div`
  color: ${props => props.theme.colour.heading};
  position: relative;
`;

export const Heading = styled.h2`
  font-size: ${props => (props.larger ? '8em' : '2.8em')};
  color: inherit;
  font-family: ${props => props.theme.font.family.strong};
  font-weight: ${props => props.theme.font.weight.bold};
  padding: ${props => (props.larger ? '0' : '.2rem 1rem 1rem 1rem')};
  text-align: center;
  line-height: ${props =>
    props.larger ? '1' : props.theme.lineHeight.heading};
  margin: 0;
`;

export const BackgroundLogo = styled(Logo)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 10rem;
`;

export const Button = styled(UIButton)`
  display: block;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: ${props => props.theme.colour.text};
  font-family: inherit;
  font-size: ${props => props.theme.font.size.small};
  line-height: ${props => props.theme.lineHeight.text};
  margin: 0 0 4rem;
  padding: 0 2rem;
  text-align: center;
`;

export default Wrapper;
