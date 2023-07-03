import { styled } from "styled-components"
import TopBar from "../../Molecules/TopBar"
import DashBoardHome from "./DashBoardHome"
import AddCoursePage from "./AddCoursePage"

function DashBoardPage() {
  return (
    <MainWrapper>
      <TopBar />
      {/* <DashBoardHome /> */}
      <AddCoursePage />
    </MainWrapper>
  )
}

export default DashBoardPage

const MainWrapper = styled.div`
  position: relative;
`
