import { styled } from "styled-components"
import HomeNavBar from "../../Molecules/HomeNavBar"
import CourseBox from "../../Molecules/CourseBox"
import { MainWrapper, ContentBox, Title } from "./commonstyles"

function DashBoardHome() {
  return (
    <MainWrapper>
      <ContentBox>
        <Title>Home</Title>
        <HomeNavBar />
        <Title>Available Courses</Title>
        <CourseBox courseName="Course 1" teacherName="Teacher 1" />
        <CourseBox courseName="Course 2" teacherName="Teacher 2" />
        <CourseBox courseName="Course 3" teacherName="Teacher 3" />
        <AddCourseButton>Add New Course</AddCourseButton>
      </ContentBox>
    </MainWrapper>
  )
}

export default DashBoardHome

const AddCourseButton = styled.button`
  background-color: #c9c9c9;
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 20px;
`
