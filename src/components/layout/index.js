import styled from 'styled-components';

const MainWrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 40px;
  width: 85vw;
  max-width: 960px;

  @media screen and (min-width: 768px) {
    padding-top: 80px
  }
`;

const HeroContainer = styled.div`
  display: block;
  margin-top: 90px;
`

const SkillsContainer = styled.div`
  margin: 110px 0 70px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 200px));
  grid-gap: 10px 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 200px));
    grid-gap: 0 60px;
  }

  @media screen and (min-width: 1024px) {
    margin: 110px;
    grid-gap: 0 70px;
  }
`

const ExperiencesContainer = styled.div`
  display: block;
  max-width: 570px;
`

const ResumeBannerContainer = styled.div`
  display: block;
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    margin: 90px 0 60px;
  }
`

const SocialContainer = styled.div`
  display: block;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-bottom: 110px;
  }
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