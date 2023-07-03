import { styled } from "styled-components"
import App from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBell,
  faComment,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"

function TopBar() {
  return (
    <MainWrapper>
      <Leftitems>
        <AppLogo>LMS App</AppLogo>
        <Ul>
          <Li>Home</Li>
          <Li>DashBoard</Li>
          <Li>My Courses</Li>
          <Li>Site Administration</Li>
        </Ul>
      </Leftitems>
      <RightItems>
        <UserIcon>AU</UserIcon>
        <IconField>
          <FontAwesomeIcon icon={faComment} />
        </IconField>
        <IconField>
          <FontAwesomeIcon icon={faBell} />
        </IconField>
        <SearchButton>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButton>
        <SearchField />
      </RightItems>
    </MainWrapper>
  )
}

export default TopBar

const MainWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  z-index: 2;
  background-color: white;
`

const Leftitems = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RightItems = styled(Leftitems)`
  flex-direction: row-reverse;
`

const AppLogo = styled.div`
  padding: 0px 20px;
  font-size: 20px;
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

export const Li = styled.li`
  padding: 0px 10px;
  font-size: 16px;
`

const SearchField = styled.input`
  height: 30px;
  width: 250px;
  margin: 0px 5px;
`

const SearchButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: white;
  margin-right: 20px;
`

const IconField = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`
const UserIcon = styled(IconField)`
  background-color: gray;
  text-align: center;
  margin-right: 20px;
`
