import styled from 'styled-components'

import PreactLogo from '../../assets/images/preact-icon.png'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`

const Copy = styled.span`
  margin-right: 8px;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
`

const Footer = () => (
  <Wrapper>
    <Copy>Made with</Copy>
    <img src={PreactLogo} alt="preact logo" />
  </Wrapper>
)

export default Footer