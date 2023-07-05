import { useField } from "formik"
import { styled } from "styled-components"

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string
  name: string
}

function CustomInput({ label, ...props }: Props) {
  let [field, meta] = useField(props.name)
  return (
    <MainWrapper>
      <Label>{label}</Label>
      <Input
        {...field}
        {...props}
        $errorcheck={meta.error && meta.touched ? true : false}
      ></Input>

      {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </MainWrapper>
  )
}

export default CustomInput

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px;
`

const Label = styled.label`
  font-size: 16px;
  margin-top: 20px;
`
const Input = styled.input<{ $errorcheck: boolean }>`
  height: 50px;
  padding: 14px 10px;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.$errorcheck ? "red" : "rgba(0, 0, 0, 0.4)")};
`

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`
