import { styled } from "styled-components"
import { useField, useFormik, FormikProvider } from "formik"
import CustomInput from "./CustomInput"

function AddChapters() {
  const handleSubmit = () => {}

  const formStates = useFormik({
    initialValues: {
      chapter: ""
    },
    onSubmit: handleSubmit
  })
  console.log(formStates.values)
  return (
    <MainWrapper>
      <Heading>Add Chapters</Heading>
      <InputArea>
        <FormikProvider value={formStates}>
          <CustomInput name="chapter" label="new chapter" />
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
`
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`
