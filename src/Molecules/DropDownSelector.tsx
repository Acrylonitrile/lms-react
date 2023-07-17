import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { styled } from "styled-components"
import { useState } from "react"

interface Props {
  list: { id: number; name: string }[]
}

function DropDownSelector({ list }: Props) {
  const [listActive, setListActive] = useState(false)
  const [selection, setSelection] = useState("")
  return (
    <MainWrapper>
      <InputDisplay>
        {selection ? selection : "...Please select an option"}
        <DropIcon onClick={() => setListActive(!listActive)}>
          <FontAwesomeIcon icon={faArrowDown} />
        </DropIcon>
      </InputDisplay>
      <SelectionList listActive={listActive}>
        {list.map((item) => (
          <SelectionItem
            id={item.id.toString()}
            onClick={() => setSelection(item.name)}
          >
            {item.name}
          </SelectionItem>
        ))}
      </SelectionList>
    </MainWrapper>
  )
}

export default DropDownSelector

const MainWrapper = styled.div`
  height: 40px;
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: white;
  overflow: visible;
  z-index: 2;
`

const InputDisplay = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  padding-left: 10px;
`
const DropIcon = styled.button`
  height: 100%;
  width: 30px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 20px;
`
const SelectionList = styled.ul<{ listActive: boolean }>`
  list-style-type: none;
  max-height: ${(props) => (props.listActive ? "200px" : "0px")};
  width: 100%;
  background-color: white;
  transition: 0.2s;
  overflow: scroll;
`
const SelectionItem = styled.li`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
