import { GlobalStyle } from "./globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { styled } from "styled-components"
import Login from "./pages/Authorization/loginPage"
import ForgotPassword from "./pages/Authorization/ForgotPassword"
import ResetPassword from "./pages/Authorization/resetPassword"
import SignUp from "./pages/Authorization/SignUp"
import DashBoardPage from "./pages/DashBoard/DashBoardPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
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
