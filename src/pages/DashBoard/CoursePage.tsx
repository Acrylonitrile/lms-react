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
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { addChapters, getChapters } from "../../Services/database.service"

interface FormValues {
  chapter: string
}

export interface IChapterDetails {
  id: number
  name: string
}

const chapterSchema = yup.object().shape({
  chapter: yup.string().required("Required")
})

function CoursePage() {
  const [detailsList, setDetailsList] = useState<IChapterDetails[]>([])
  const { languageId } = useParams()

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const result = await addChapters(
      [values.chapter],
      parseInt(languageId as string)
    )
    console.log(result)
    const newChapters = await getChapters(languageId as string)
    setDetailsList(newChapters)
    actions.resetForm()
  }

  const formStates = useFormik({
    initialValues: {
      chapter: ""
    },
    onSubmit: handleSubmit,
    validationSchema: chapterSchema
  })

  useEffect(() => {
    getChapters(languageId as string).then((result) => setDetailsList(result))
  }, [])

  const alterSequence = (oldIndex: number, newIndex: number) => {
    const tempList = [...detailsList]
    tempList.splice(oldIndex, 1)
    tempList.splice(newIndex, 0, detailsList[oldIndex])
    setDetailsList(tempList)
  }

  return (
    <MainWrapper>
      <ContentBox>
        <Title>Course Name</Title>
        <HomeNavBar />
        <DndProvider backend={HTML5Backend}>
          {detailsList.map((item, index) => (
            <ChapterDetails
              label={item.name}
              id={item.id}
              index={index}
              alterSequence={alterSequence}
            />
          ))}
        </DndProvider>
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
