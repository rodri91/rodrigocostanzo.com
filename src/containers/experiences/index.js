import ExperienceItem from '../../components/experienceItem'
import content from '../../assets/content-data.json'

const Experiences = () => {
  const {experiences} = content;
  return experiences.map(experience => <ExperienceItem data={experience} />)
}

export default Experiences;