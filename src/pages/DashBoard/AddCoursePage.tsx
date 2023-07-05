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
    //console.log(values)
    try {
      const languageResult = await axios.post(`${apiUrl}/language/add`, {
        name: values.courseName
      })
      const languageId = languageResult.data.languageId as number
      const chapterResult = await axios.post(`${apiUrl}/chapters/add`, {
        chapterList: values.chapterList,
        languageId
      })
      console.log(languageResult)
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
          <SubmitButton onClick={() => formStates.handleSubmit()}>
            Submit
          </SubmitButton>
        </FormikProvider>
      </ContentBox>
    </MainWrapper>
  )
}

export default AddCoursePage
