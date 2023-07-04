import { useField } from "formik"
import { styled } from "styled-components"

interface Props {
  radioOptions: Array<{ key: string; value: string }>
  name: string
  type: string
}

function RadioButtons({ radioOptions, name, type }: Props) {
  const [field, meta] = useField(name)
  //  console.log(field.value)
  return (
    <>
      {radioOptions.map((option) => (
        <>
          {" "}
          <RadioButton
            key={option.key}
            id={option.key}
            name={name}
            type={type}
            //  {...field}
            onChange={field.onChange}
            value={option.value}
            checked={field.value === option.value}
          />
          <span> {option.value}</span>
        </>
      ))}
    </>
  )
}

export default RadioButtons

const RadioButton = styled.input`
  margin: 30px 10px 30px 30px;
`
