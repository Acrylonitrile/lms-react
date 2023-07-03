import { styled } from "styled-components"
import { Link, useParams } from "react-router-dom"
import { Formik, FormikHelpers } from "formik"
import {
  FormWrapper,
  Header,
  SubHeader,
  SubmitButton,
  Form,
  TextZone
} from "../../Molecules/formstyles"
import * as yup from "yup"
import CustomInput from "../../Molecules/CustomInput"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a stronger passsword" })
    .required("Required"),
  verifyPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("required")
})

interface IFormValues {
  password: string
  verifyPassword: string
}

function ResetPassword() {
  const { token } = useParams()
  console.log(token)
  const [verified, setVerified] = useState(false)

  const handleSubmit = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => {
    console.log(values)

    actions.resetForm()
  }

  if (verified) {
    return (
      <>
        <MainWrapper>
          <FormWrapper>
            <Header>Reset Password</Header>
            <SubHeader>Enter your new password</SubHeader>
            <Formik
              initialValues={{ password: "", verifyPassword: "" }}
              onSubmit={handleSubmit}
              validationSchema={resetPasswordSchema}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <TextZone>
                    <CustomInput
                      label="password"
                      name="password"
                      type="password"
                      placeholder="Enter new Password"
                    />
                    <CustomInput
                      label="verifyPassword"
                      name="verifyPassword"
                      type="password"
                      placeholder="Verify new password"
                    />
                  </TextZone>
                  <SubmitButton
                    type="submit"
                    id="submit"
                    disabled={
                      props.errors.password || props.errors.verifyPassword
                        ? true
                        : false
                    }
                  >
                    Reset Password
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
  } else return <MainWrapper>Invalid Reset Link</MainWrapper>
}

export default ResetPassword

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
