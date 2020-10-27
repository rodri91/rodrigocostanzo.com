import styled from 'styled-components'
import Link from '../link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`

const EmailLine = styled.span`
  font-weight: normal;
  font-size: 18px;
`

const Social = () => (
  <Wrapper>
    <Link text="Github" url="https://github.com/rodri91" />
    <Link text="LinkedIn" url="https://www.linkedin.com/in/rodrigo-costanzo/" />
    <Link text="Twitter" url="https://twitter.com/rodri91" />
    <Link text="Instagram" url="https://www.instagram.com/rodric91/" />
    <EmailLine>rodrigocostanzo@gmail.com</EmailLine>
  </Wrapper>
)

export default Social