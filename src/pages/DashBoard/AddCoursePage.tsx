import { styled } from "styled-components"
import { MainWrapper, Title, ContentBox } from "./commonstyles"
import HomeNavBar from "../../Molecules/HomeNavBar"
import { FormikContext, useFormik, FormikProvider, FormikHelpers } from "formik"
import CustomInput from "../../Molecules/CustomInput"
import AddChapters from "../../Molecules/AddChapters"
import { SubmitButton } from "../../Molecules/formstyles"

interface FormValues {
  courseName: string
  chapters: string[]
}

function AddCoursePage() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("test")
    console.log(values)
    actions.resetForm()
  }

  const formStates = useFormik({
    initialValues: {
      courseName: "",
      chapters: [] as string[]
    },
    onSubmit: handleSubmit
  })
  // console.log(formStates.values)
  return (
    <MainWrapper>
      <ContentBox>
        <Title>Add a new course</Title>
        <HomeNavBar />
        <FormikProvider value={formStates}>
          <CustomInput name="courseName" label="Course Name" />
          <AddChapters name="chapters" />
          <SubmitButton onClick={() => formStates.handleSubmit()}>
            Submit
          </SubmitButton>
        </FormikProvider>
      </ContentBox>
    </MainWrapper>
  )
}

export default AddCoursePage
