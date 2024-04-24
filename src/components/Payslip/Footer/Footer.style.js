import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colour.footerBackground};
  color: ${props => props.theme.colour.text};
  width: 100%;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const CopyrightText = styled.p`
  font-size: inherit;
  color: inherit;
  margin: 0;
  padding: 1rem 0;
`;

export default FooterWrapper;
