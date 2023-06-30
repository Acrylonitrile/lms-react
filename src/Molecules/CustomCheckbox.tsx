import { useField } from "formik"
import { styled } from "styled-components"

interface Props {
  label: string
  name: string
  type: string
}

function CustomCheckbox({ label, ...props }: Props) {
  const [field, meta] = useField(props)
  return (
    <>
      <CheckBox id="checkbox" {...props} {...field} />
      <span> {label}</span>
    </>
  )
}

export default CustomCheckbox

const CheckBox = styled.input`
  margin: 30px 10px 30px 0px;
`
