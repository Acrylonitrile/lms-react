import { styled } from "styled-components"

interface Props {
  label: string
}

function ChapterDetails({ label }: Props) {
  return <MainWrapper>{label}</MainWrapper>
}
export default ChapterDetails

const MainWrapper = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
`
