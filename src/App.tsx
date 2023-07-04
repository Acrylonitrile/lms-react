import { GlobalStyle } from "./globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { styled } from "styled-components"
import Login from "./pages/Authorization/loginPage"
import ForgotPassword from "./pages/Authorization/ForgotPassword"
import ResetPassword from "./pages/Authorization/resetPassword"
import SignUp from "./pages/Authorization/SignUp"
import DashBoardPage from "./pages/DashBoard/DashBoardPage"
import DashBoardHome from "./pages/DashBoard/DashBoardHome"
import AddCoursePage from "./pages/DashBoard/AddCoursePage"
import CoursePage from "./pages/DashBoard/CoursePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<DashBoardPage />}>
            <Route path="home" element={<DashBoardHome />} />
            <Route path="/addcourse" element={<AddCoursePage />} />
            <Route path="/course" element={<CoursePage />} />
          </Route>
          <Route path="auth">
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
