import { h } from 'preact';

import Header from '../components/header';
import Hero from '../components/hero'
import Skills from './skills'
import Experiences from './experiences'
import ResumeBanner from '../components/resumeBanner'
import Social from '../components/social'
import Footer from '../components/footer'
import Layout from '../components/layout'

const App = () => (
	<Layout 
		header={<Header />}
		hero={<Hero />}
		skills={<Skills />}
		experiences={<Experiences />}
		resumeBanner={<ResumeBanner />}
		social={<Social />}
		footer={<Footer />}
	/>
)

export default App;
