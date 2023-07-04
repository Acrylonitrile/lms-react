import { MainWrapper, ContentBox, Title } from "./commonstyles"
import HomeNavBar from "../../Molecules/HomeNavBar"
import ChapterDetails from "../../Molecules/ChapterDetails"
import { styled } from "styled-components"
import CustomInput from "../../Molecules/CustomInput"
import {
  FormikHandlers,
  FormikHelpers,
  FormikProvider,
  useFormik
} from "formik"
import { useState } from "react"
import { chapterSchema } from "../../Molecules/AddChapters"

interface FormValues {
  chapter: string
}

function CoursePage() {
  const [chapterList, setChapterList] = useState<string[]>([])

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    let tempList = chapterList
    tempList.push(values.chapter)
    setChapterList(tempList)
    console.log(chapterList)
    actions.resetForm()
  }

  const formStates = useFormik({
    initialValues: {
      chapter: ""
    },
    onSubmit: handleSubmit,
    validationSchema: chapterSchema
  })

  return (
    <MainWrapper>
      <ContentBox>
        <Title>Course Name</Title>
        <HomeNavBar />
        {chapterList.map((chapter) => (
          <ChapterDetails label={chapter} />
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
