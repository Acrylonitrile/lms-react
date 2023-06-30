import { GlobalStyle } from "./globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { styled } from "styled-components"
import Login from "./pages/loginPage"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/resetPassword"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="authorization">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="resetpassword/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
