import { h } from 'preact';
import styled from 'styled-components'
import Button from '../button';
import Logo from '../../assets/images/logo.svg'

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
`

const Header = () => (
	<Wrapper>
		<img src={Logo} />
		<Button text="Contact me" />
	</Wrapper>
);

export default Header;
