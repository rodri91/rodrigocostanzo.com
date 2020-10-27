import styled from 'styled-components';

const Wrapper = styled.button`
  padding: 15px 25px;
  background: var(--blue-light);
  border-radius: 5px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;

const Content = styled.span`
  color: #fff;
  font-family: var(--default-font);
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  text-transform: uppercase;
`

const Button = ({text}) => (
  <Wrapper>
    <Content>
      {text}
    </Content>
  </Wrapper>
)

export default Button;