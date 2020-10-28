import styled from 'styled-components'
import Button from '../button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  border-radius: 5px;
  background: var(--blue-super-light);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
`

const Copy = styled.span`
  width: 70%
  margin-bottom: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
`

const ResumeBanner = () => (
  <Wrapper>
    <Copy>Still looking for a PDF? Go, download it.</Copy>
    <Button text="download my resume" />
  </Wrapper>
)

export default ResumeBanner 