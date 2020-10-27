import { Component, createRef } from "preact";
import styled from 'styled-components'

const Phrase = styled.h2`
  position: absolute;
  top: 0;
  margin: 10px 0 0;
  color: var(--gray);
  font-size: 36px;
  line-height: 43px;
  font-style: normal;
  font-weight: normal;
  animation: ${props => props.animate ? 'slide-in ease .6s .1s both' : 'slide-out ease .6s both' }
`

const Wrapper = styled.div`
  position: relative;
  height: 70px;
`

class RotatingPhrases extends Component {
  constructor() {
    super();
    this.state = {
      phrases: [
        'Design research believer.',
        'Authentic explorer.',
        'Detail maniac.',
        'UX/UI lover.',
        'Self-taught person.',
        'Customer aware.',
        'Focused on product performance.',
        'Accessibility oriented.'
      ],
      phraseVisible: 0,
      interval: 3500
    }
    this.phraseRef = createRef()
  }

  nextPhrase() {
    const {phrases} = this.state;

    if(this.state.phraseVisible === phrases.length - 1) {
      this.setState({phraseVisible: 0})
    } else {
      this.setState({ phraseVisible: this.state.phraseVisible + 1 });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.nextPhrase()
    }, this.state.interval)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const {phrases, phraseVisible: currentPhrase} = this.state;

    const phraseItems = phrases.map((phrase, i) => <Phrase animate={i === currentPhrase}>{phrase}</Phrase>)
    return (
      <Wrapper>
        {phraseItems}
      </Wrapper>
    )
  }
}

export default RotatingPhrases