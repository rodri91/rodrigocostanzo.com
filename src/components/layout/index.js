import styled from 'styled-components';

const MainWrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 80px;
  max-width: 960px;
`;

const HeroContainer = styled.div`
  display: block;
  margin-top: 85px;
`

const SkillsContainer = styled.div`
  margin: 110px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 200px));
  grid-gap: 70px;
`

const ExperiencesContainer = styled.div`
  display: block;
  max-width: 570px;
`

const ResumeBannerContainer = styled.div`
  display: block;
  margin: 90px 0 60px;
`

const SocialContainer = styled.div`
  display: block;
  margin-bottom: 110px;
`

const Layout = ({header, hero, skills, experiences, resumeBanner, social, footer}) => (
 <MainWrapper>
   {header}
    <HeroContainer>{hero}</HeroContainer>
    <SkillsContainer>{skills}</SkillsContainer>
    <ExperiencesContainer>{experiences}</ExperiencesContainer>
    <ResumeBannerContainer>{resumeBanner}</ResumeBannerContainer>
    <SocialContainer>{social}</SocialContainer>
    {footer}
 </MainWrapper>
)

export default Layout