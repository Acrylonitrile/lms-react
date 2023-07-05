import { styled } from "styled-components"
import HomeNavBar from "../../Molecules/HomeNavBar"
import CourseBox from "../../Molecules/CourseBox"
import { MainWrapper, ContentBox, Title } from "./commonstyles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { apiUrl } from "../../constants"
interface LanguageData {
  id: number
  name: string
}

function DashBoardHome() {
  const navigate = useNavigate()
  const [languageList, setLanguageList] = useState<LanguageData[]>([])

  const getData = async () => {
    const result = await axios.get(`${apiUrl}/language`)
    //console.log(result)
    setLanguageList(result.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <MainWrapper>
      <ContentBox>
        <Title>Home</Title>
        <HomeNavBar />
        <Title>Available Courses</Title>
        {/* <CourseBox courseName="Course 1" teacherName="Teacher 1" />
        <CourseBox courseName="Course 2" teacherName="Teacher 2" />
        <CourseBox courseName="Course 3" teacherName="Teacher 3" /> */}
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
