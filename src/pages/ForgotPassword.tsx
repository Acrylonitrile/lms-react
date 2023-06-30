import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { Formik, FormikHelpers } from "formik"
import {
  FormWrapper,
  Header,
  SubHeader,
  SubmitButton,
  Form,
  TextZone
} from "../Molecules/formstyles"
import * as yup from "yup"
import CustomInput from "../Molecules/CustomInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Please Enter a Valid Email").required("Required")
})

interface IFormValues {
  email: string
}

function ForgotPassword() {
  const handleSubmit = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    console.log(values)
    actions.resetForm()
  }

  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Header>Forgot Password?</Header>
          <SubHeader>
            Enter your email and we'll send you instructions to reset your
            password
          </SubHeader>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={handleSubmit}
            validationSchema={forgotPasswordSchema}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <TextZone>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </TextZone>
                <SubmitButton
                  type="submit"
                  id="submit"
                  disabled={props.errors.email ? true : false}
                >
                  Send Reset Link
                </SubmitButton>
              </Form>
            )}
          </Formik>
          <Footer>
            <Link to="../login">
              <FontAwesomeIcon icon={faAngleLeft} />
              Back to Sign In
            </Link>
          </Footer>
        </FormWrapper>
      </MainWrapper>
    </>
  )
}

export default ForgotPassword

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Footer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
`
