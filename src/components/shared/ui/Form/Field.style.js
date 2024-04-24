import styled from 'styled-components';
import { darken } from 'polished';

import ReactDatePicker from './DateInput/ReactDatePicker.style';

export const Group = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-size: ${props => props.theme.font.size.small};
  display: inline-block;
  max-width: 100%;
  font-weight: 400;
  color: ${props => darken(0.2, props.theme.colour.text)};
`;

export const LabelGroup = styled.div`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  display: block;
  color: ${props => props.theme.colour.secondary};
  margin: 0.7rem 0 1.2rem;
  font-size: ${props => props.theme.font.size.small};
`;

export const InputGroup = styled.div`
  margin: 0;
  ${ReactDatePicker};
`;
