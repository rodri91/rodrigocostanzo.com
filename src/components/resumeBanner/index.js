import styled from 'styled-components'
import Button from '../button'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background: var(--blue-super-light);
`

const Copy = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`

const ResumeBanner = () => (
  <Wrapper>
    <Copy>Still looking for a PDF? Go, download it.</Copy>
    <Button text="download my resume" />
  </Wrapper>
)

export default ResumeBanner