import { h } from 'preact';

import Header from '../components/header';
import Hero from '../components/hero'
import Skills from './skills'
import Experiences from './experiences'
import ResumeBanner from '../components/resumeBanner'
import Social from '../components/social'
import Footer from '../components/footer'
import Layout from '../components/layout'

import {RESUME_URL} from '../constants'

const App = () => {
	const goToResumeLink = () => {
		window.open(
			RESUME_URL,
			'_blank'
		);
	}

	const openMailContact = () => {
		window.open(
			'mailto:rodrigocostanzo@gmail.com?subject=Contact from rodrigocostanzo.com',
			'_blank' // <- This is what makes it open in a new window.
		);
	}

	return (
		<Layout 
			header={<Header openMailContact={openMailContact} />}
			hero={<Hero />}
			skills={<Skills />}
			experiences={<Experiences />}
			resumeBanner={<ResumeBanner goToResumeLink={goToResumeLink} />}
			social={<Social />}
			footer={<Footer />}
		/>
	)
}

export default App;
