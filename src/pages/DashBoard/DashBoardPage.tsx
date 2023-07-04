import { styled } from "styled-components"
import TopBar from "../../Molecules/TopBar"
import DashBoardHome from "./DashBoardHome"
import AddCoursePage from "./AddCoursePage"
import CoursePage from "./CoursePage"
import { Outlet } from "react-router-dom"

function DashBoardPage() {
  return (
    <MainWrapper>
      <TopBar />
      {/* <DashBoardHome /> */}
      {/* <AddCoursePage /> */}
      {/* <CoursePage /> */}
      <Outlet />
    </MainWrapper>
  )
}

export default DashBoardPage

const MainWrapper = styled.div`
  position: relative;
`
