import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { Formik, FormikHelpers } from "formik"
import {
  FormWrapper,
  Header,
  SubHeader,
  ButtonRow,
  SubmitButton,
  Button,
  Form,
  TextZone,
  RowWrap
} from "../../Molecules/formstyles"
import * as yup from "yup"
import CustomInput from "../../Molecules/CustomInput"
import CustomCheckbox from "../../Molecules/CustomCheckbox"
import RadioButtons from "../../Molecules/RadioButtonField"

interface IFormValues {
  email: string
  password: string
  role: "admin" | "mentor" | "fresher"
  rememberme: boolean
}

const loginSchema = yup.object().shape({
  email: yup.string().email("Please Enter a Valid Email").required("Required")
})

function Login() {
  const radioOptions = [
    {
      key: "option1",
      value: "admin"
    },
    {
      key: "option2",
      value: "mentor"
    },
    {
      key: "option3",
      value: "fresher"
    }
  ]

  const handleSubmit = (
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
          <Header>Sign In</Header>
          <SubHeader>
            Don't have An Account? <Link to="../signup">Sign Up</Link>.
          </SubHeader>
          {/* <ButtonRow>
            <Button bgcolor="ffffff">Sign In with Google</Button>
            <Button bgcolor="4040d5">Sign In with Facebook</Button>
          </ButtonRow> */}

          <Formik
            initialValues={{
              email: "",
              password: "",
              role: "admin",
              rememberme: false
            }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            validateOnMount={true}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <TextZone onMouseEnter={() => console.log(props.isValid)}>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <RowWrap>
                    <RadioButtons
                      radioOptions={radioOptions}
                      name="role"
                      type="radio"
                    />
                  </RowWrap>
                </TextZone>
                <RowWrap>
                  <CustomCheckbox
                    label="Remember Me"
                    name="rememberme"
                    type="checkbox"
                  />
                  <ForgotLink>
                    <Link to="../forgotpassword">Forgot Password?</Link>
                  </ForgotLink>
                </RowWrap>
                <SubmitButton
                  type="submit"
                  id="submit"
                  disabled={!props.isValid}
                >
                  Sign In
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </MainWrapper>
    </>
  )
}

export default Login

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ForgotLink = styled.div`
  margin-left: auto;
`
