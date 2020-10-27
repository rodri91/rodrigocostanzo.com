import content from '../../assets/content-data.json'
import SkillColumn from '../../components/skillColumn'

const Skills = () => {
  const { skills } = content;
  return skills.map(skill=> <SkillColumn data={skill} />)
}

export default Skills