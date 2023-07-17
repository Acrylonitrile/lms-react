import { styled } from "styled-components"
import { MainWrapper, Title, ContentBox } from "./commonstyles"
import HomeNavBar from "../../Molecules/HomeNavBar"
import { useFormik, FormikProvider, FormikHelpers } from "formik"
import CustomInput from "../../Molecules/CustomInput"
import AddChapters from "../../Molecules/AddChapters"
import { SubmitButton } from "../../Molecules/formstyles"
import * as yup from "yup"
import axios from "axios"
import { apiUrl } from "../../constants"
import { useNavigate } from "react-router-dom"
import DropDownSelector from "../../Molecules/DropDownSelector"
import { addChapters, addLanguage } from "../../Services/database.service"

interface FormValues {
  courseName: string
  chapterList: string[]
}

const courseNameSchema = yup.object().shape({
  courseName: yup.string().required("Required")
})

function AddCoursePage() {
  const navigate = useNavigate()

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      const languageId = await addLanguage(values.courseName)
      const chapterResult = await addChapters(values.chapterList, languageId)
      console.log(chapterResult)
      actions.resetForm()
      navigate(`/course/${languageId}`)
    } catch (error) {
      console.log(error)
      actions.resetForm()
    }
  }

  const formStates = useFormik({
    initialValues: {
      courseName: "",
      chapterList: [] as string[]
    },
    onSubmit: handleSubmit,
    validationSchema: courseNameSchema
  })
  // console.log(formStates.values)

  return (
    <MainWrapper>
      <ContentBox>
        <Title>Add a new course</Title>
        <HomeNavBar />
        <FormikProvider value={formStates}>
          <CustomInput name="courseName" label="Course Name" />
          <AddChapters name="chapterList" />
          {/* <DropDownSelector /> */}
          <SubmitButton onClick={() => formStates.handleSubmit()}>
            Submit
          </SubmitButton>
        </FormikProvider>
      </ContentBox>
    </MainWrapper>
  )
}

export default AddCoursePage
