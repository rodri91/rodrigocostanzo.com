import styled from 'styled-components'

import Link from '../link'

const Item = styled.div`
  display: block;
  margin-bottom: 30px;
`

const Title = styled.span`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`

const Position = styled.span`
  display: block;
  color: var(--black);
  font-weight: normal;
  font-size: 18px;
`

const Description = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 23px;
  color: var(--gray);
`

const ExperienceItem = ({ data: {time, company, position, description}}) => (
  <Item>
    <Title>{time} @ <Link text={company.name} url={company.linkUrl} /></Title>
    <Position>{position}</Position>
    <Description>{description}</Description>
  </Item>
)

export default ExperienceItem;