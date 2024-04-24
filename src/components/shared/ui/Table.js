import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const Responsive = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const tdThStyles = css`
  padding: 1.1rem 0.75rem 1rem 0.75rem;
  vertical-align: top;
  border-top: ${props => `1px solid ${props.theme.colour.border}`};
  font-size: ${props => props.theme.font.size.small};
  border-bottom-color: ${props => props.theme.colour.border};
  border-bottom-style: solid;
`;

const THead = styled.thead`
  margin: 0;
  padding: 0;
`;

const TD = styled.td`
  ${tdThStyles}
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.normal};
  font-family: inherit;
  border-bottom-width: 2px;
`;

const TR = styled.tr`
  margin: 0;
  padding: 0;

  &:hover > ${TD} {
    background-color: ${props => lighten(0.02, props.theme.colour.border)};
  }
`;

const TH = styled.th`
  ${tdThStyles}
  border-top: none;
  vertical-align: bottom;
  border-bottom-width: 3px;
  font-weight: ${props => props.theme.font.weight.bold};
  text-align: inherit;
  font-family: ${props => props.theme.font.family.strong};
`;

const TBody = styled.tbody`
  margin: 0;
  padding: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  color: ${props => props.theme.colour.text};
`;

Table.Responsive = Responsive;
Table.THead = THead;
Table.TR = TR;
Table.TH = TH;
Table.TBody = TBody;
Table.TD = TD;

export default Table;
