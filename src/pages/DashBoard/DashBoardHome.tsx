import { styled } from "styled-components"
import HomeNavBar from "../../Molecules/HomeNavBar"
import CourseBox from "../../Molecules/CourseBox"
import { MainWrapper, ContentBox, Title } from "./commonstyles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getLanguages } from "../../Services/database.service"
interface LanguageData {
  id: number
  name: string
}

function DashBoardHome() {
  const navigate = useNavigate()
  const [languageList, setLanguageList] = useState<LanguageData[]>([])
  useEffect(() => {
    getLanguages().then((result) => setLanguageList(result))
  }, [])
  return (
    <MainWrapper>
      <ContentBox>
        <Title>Home</Title>
        <HomeNavBar />
        <Title>Available Courses</Title>
        {languageList.map((item) => (
          <CourseBox
            courseName={item.name}
            teacherName="teacher"
            id={item.id}
          />
        ))}
        <AddCourseButton onClick={() => navigate("/addcourse")}>
          Add New Course
        </AddCourseButton>
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
  &:hover {
    cursor: pointer;
  }
`
