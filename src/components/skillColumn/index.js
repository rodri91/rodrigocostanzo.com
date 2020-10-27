import styled from 'styled-components';

const SkillTitle = styled.h4`
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-decoration: underline;
`;

const SkillDetailBlock = styled.p`
  font-size: 18px;
  line-height: 21px;
`

const BlockTitle = styled.span`
  display: block;
  font-weight: 500;
`

const SkillColumn = ({data: {title, blocks}}) => {

  const contentBlocks = blocks.map(block => (
    <SkillDetailBlock>
      <BlockTitle>{block.title}</BlockTitle>
      {block.content.map((text, i, arr) => {
        if(arr.length - 1 === i) {
          return `${text}.`
        } else {
          return `${text}, `
        }
      })}
    </SkillDetailBlock>
  ));

  return (
    <div>
    <SkillTitle>{title}</SkillTitle>
    {contentBlocks}
    </div>
  )
}

export default SkillColumn;