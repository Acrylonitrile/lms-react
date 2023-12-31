import { styled } from "styled-components"
import { Ul, Li } from "./TopBar"
import { useNavigate } from "react-router-dom"

function HomeNavBar() {
  const navigate = useNavigate()
  return (
    <MainWrapper>
      <Ul>
        <Li onClick={() => navigate("/")}>Home</Li>
        <Li>Settings</Li>
        <Li>Particpants</Li>
        <Li>Reports</Li>
        <Li>Question Bank</Li>
      </Ul>
    </MainWrapper>
  )
}

export default HomeNavBar

const MainWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  color: #0069d1;
`
