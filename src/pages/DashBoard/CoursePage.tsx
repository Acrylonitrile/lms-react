import { MainWrapper, ContentBox, Title } from "./commonstyles"
import HomeNavBar from "../../Molecules/HomeNavBar"
import ChapterDetails from "../../Molecules/ChapterDetails"
import { styled } from "styled-components"
import CustomInput from "../../Molecules/CustomInput"
import { FormikHelpers, FormikProvider, useFormik } from "formik"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as yup from "yup"
import axios from "axios"
import { apiUrl } from "../../constants"

interface FormValues {
  chapter: string
}

interface ChapterDetails {
  id: number
  name: string
}

const chapterSchema = yup.object().shape({
  chapter: yup.string().required("Required")
})

function CoursePage() {
  const [detailsList, setDetailsList] = useState<ChapterDetails[]>([])
  const { languageId } = useParams()

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const result = await axios.post(`${apiUrl}/chapters/add`, {
      chapterList: [values.chapter],
      languageId: parseInt(languageId as string)
    })
    console.log(result)
    await getChapters(languageId as string)
    actions.resetForm()
  }

  const formStates = useFormik({
    initialValues: {
      chapter: ""
    },
    onSubmit: handleSubmit,
    validationSchema: chapterSchema
  })

  const getChapters = async (languageId: string) => {
    const result = await axios.get(`${apiUrl}/chapters/${languageId}`)
    setDetailsList(result.data)
  }

  useEffect(() => {
    getChapters(languageId as string)
  }, [])

  return (
    <MainWrapper>
      <ContentBox>
        <Title>Course Name</Title>
        <HomeNavBar />
        {detailsList.map((item) => (
          <ChapterDetails label={item.name} />
        ))}
        <FormikProvider value={formStates}>
          <CustomInput name="chapter" label="New Chapter" />
          <AddButton onClick={() => formStates.handleSubmit()}>
            Add new chapter
          </AddButton>
        </FormikProvider>
      </ContentBox>
    </MainWrapper>
  )
}

export default CoursePage

const AddButton = styled.button`
  background-color: #c8c8c8;
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin: 10px 0px;
`
