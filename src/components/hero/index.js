import styled from 'styled-components'
import {keyframes} from 'styled-components'

import WavingHand from '../../assets/images/waving-hand-emoji.png'

import RotatingPhrase from '../rotatingPhrase';

const MainTitle = styled.h1`
  margin: 0 0 30px;
  font-family: var(--default-font);
  font-size: 64px;
  font-style: normal;
  font-weight: normal;
  line-height: 76px;
`

const SubTitle = styled.h2`
  margin: 0;
  color: var(--gray);
  font-size: 36px;
  line-height: 43px;
  font-style: normal;
  font-weight: normal;
`

const WaveAnimation = keyframes`
  0% {
    transform-origin: 50px 50px;
    transform: rotate(0deg)
  }

  50% {
    transform-origin: 50px 50px;
    transform: rotate(-15deg)
  }

  100% {
    transform-origin: 50px 50px;
    transform: rotate(0deg)
  }
`

const Emoji = styled.img`
  &:hover {
    animation: ${WaveAnimation} 2s ease infinite;
  }
`

const Hero = () => (
  <>
    <MainTitle>
      Hi! <Emoji width="65" height="65" src={WavingHand} alt="" /> <br/>
      I'm Rodri.
    </MainTitle>
    <SubTitle>Front-end developer based in Argentina.</SubTitle>
    <RotatingPhrase />
  </>
)

export default Hero;