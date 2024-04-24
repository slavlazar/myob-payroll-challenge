import { css } from 'styled-components';

const ReactDatePicker = css`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
  }
  .react-datepicker {
    font-size: 1.2rem;
    font-family: ${props => props.theme.font.family.heading};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: ${props => props.theme.lineHeight.text};
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 1.3rem;
  }
  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range {
    background-color: ${props => props.theme.colour.primary};
  }
`;

export default ReactDatePicker;
