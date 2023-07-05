import { styled } from "styled-components"
import { useField, useFormik, FormikProvider, FormikHelpers } from "formik"
import CustomInput from "./CustomInput"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import * as yup from "yup"

interface FormValues {
  chapter: string
}

interface Props {
  name: string
}

const chapterSchema = yup.object().shape({
  chapter: yup.string().required("Required")
})

function AddChapters({ name }: Props) {
  const [field, meta, helpers] = useField(name)
  const [chapterList, setchapterList] = useState<string[]>(field.value)
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const newList = chapterList
    newList.push(values.chapter)
    setchapterList(newList)
    helpers.setValue(newList)
    actions.resetForm()
  }

  const formStates = useFormik({
    initialValues: {
      chapter: ""
    },
    onSubmit: handleSubmit,
    validationSchema: chapterSchema
  })
  // console.log(field.value)

  return (
    <MainWrapper>
      <Heading>Add Chapters</Heading>
      <InputArea>
        <ChapterList>
          {field.value.map((chapter: string) => (
            <Li>{chapter}</Li>
          ))}
        </ChapterList>
        <FormikProvider value={formStates}>
          <InputRow>
            <CustomInput name="chapter" label="new chapter" />
            <AddButton
              onClick={() => {
                formStates.handleSubmit()
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </AddButton>
          </InputRow>
        </FormikProvider>
      </InputArea>
    </MainWrapper>
  )
}

export default AddChapters

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`
const Heading = styled.div`
  font-size: 20px;
  padding: 20px 0px;
`
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 20px;
`
const AddButton = styled.button`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  position: absolute;
  bottom: 15px;
  right: -40px;
`
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 400px;
`
const ChapterList = styled.ul`
  list-style-type: none;
  padding: 10px;
`
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
`
