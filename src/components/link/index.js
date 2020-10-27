import styled from 'styled-components'

const LinkWrapper = styled.a`
  color: var(--blue-light);
  font-size: 18px;
  font-weight: 500;
  text-decoration-line: underline;
`

const Link = ({url, text}) => (
  <LinkWrapper href={url} target="_blank">{text}</LinkWrapper>
)

export default Link;