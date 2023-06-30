import { styled } from "styled-components"

export const FormWrapper = styled.div`
  padding: 20px;
  height: 650px;
  width: 600px;
  @media (max-width: 650px) {
    width: 100%;
  }
`

export const Header = styled.h1`
  font-weight: bold;
  margin: 10px 0px;
`
export const SubHeader = styled.div`
  font-size: 16px;
`
export const ButtonRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 20px 0px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
  border-radius: 10px;
`
export const TextZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`

export const Button = styled.button<{ bgcolor: string }>`
  flex-grow: 1;
  margin: 0px 10px;
  height: inherit;
  background-color: ${(props) => `#${props.bgcolor}`};
  color: ${(props) => (props.bgcolor === "ffffff" ? "black" : "white")};
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
`
export const RowWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`
export const SubmitButton = styled.button`
  margin: 20px 0px;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #4040d5;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  transition: 0.2s;
  &:disabled {
    background-color: gray;
  }
`
