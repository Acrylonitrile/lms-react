import { styled } from "styled-components"

interface Props {
  courseName: string
  teacherName: string
}

function CourseBox({ courseName, teacherName }: Props) {
  return (
    <MainWrapper>
      <CourseName>{courseName}</CourseName>
      <CourseDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        quisquam perferendis fugiat dicta quis earum eligendi dolorum sunt
        laudantium expedita?
      </CourseDescription>
      <TeacherName>
        <b>Teacher: </b>
        {teacherName}
      </TeacherName>
    </MainWrapper>
  )
}

export default CourseBox

const MainWrapper = styled.div`
  width: 100%;
  height: 130px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  padding: 20px;
  margin: 10px 0px;
`
const CourseName = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
`
const CourseDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const TeacherName = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`
