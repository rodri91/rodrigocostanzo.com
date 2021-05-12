import { h } from 'preact';
import styled from 'styled-components'
import Button from '../button';
import Logo from '../../assets/images/logo.svg'

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
`

const Header = ({openMailContact}) => (
	<Wrapper>
		<img height="50" width="50" src={Logo} alt="site logo" />
		<Button text="Contact me" handleClick={openMailContact} />
	</Wrapper>
);

export default Header;
