import { styled } from "styled-components"
import { MainWrapper, Title, ContentBox } from "./commonstyles"
import HomeNavBar from "../../Molecules/HomeNavBar"
import { FormikContext, useFormik, FormikProvider } from "formik"
import CustomInput from "../../Molecules/CustomInput"
import AddChapters from "../../Molecules/AddChapters"

function AddCoursePage() {
  const handleSubmit = () => {}

  const formStates = useFormik({
    initialValues: {
      courseName: "",
      chapters: [] as string[]
    },
    onSubmit: handleSubmit
  })
  //  console.log(formStates.values)
  return (
    <MainWrapper>
      <ContentBox>
        <Title>Add a new course</Title>
        <HomeNavBar />
        <FormikProvider value={formStates}>
          <CustomInput name="courseName" label="Course Name" />
          <AddChapters />
        </FormikProvider>
      </ContentBox>
    </MainWrapper>
  )
}

export default AddCoursePage
